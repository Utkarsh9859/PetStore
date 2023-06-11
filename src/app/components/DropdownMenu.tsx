'use client';
import { Fragment, useState, useRef } from 'react';
import { Transition, Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface DropdownProps {
  options: string[];
  placeholder: string;
  dropUp?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, placeholder, dropUp = false }) => {
  const [selectedOption, setSelectedOption] = useState('');
  let timeout: any;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const timeoutDuration = 200;

  const openMenu = () => buttonRef?.current?.click();

  const closeMenu = () =>
    dropdownRef?.current?.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'Escape',
        bubbles: true,
        cancelable: true,
      })
    );

  const onMouseEnter = (closed: boolean) => {
    clearTimeout(timeout);
    closed && openMenu();
  };

  const onMouseLeave = (open: boolean) => {
    open && (timeout = setTimeout(() => closeMenu(), timeoutDuration));
  };

  const getMenuStyle = () => {
    if (dropUp) {
      return {
        top: 'auto',
        bottom: '100%',
        marginTop: '-0.5rem',
      };
    } else {
      return {};
    }
  };

  return (
    <Menu>
      {({ open }) => (
        <>
          <span
            onClick={openMenu}
            onMouseEnter={() => onMouseEnter(!open)}
            onMouseLeave={() => onMouseLeave(open)}
          >
            <Menu.Button
              ref={buttonRef}
              className="inline-flex justify-center items-center w-full p-0 shadow-none font text-black hover:text-gray-600 rounded-md focus:outline-none"
            >
              {selectedOption !== '' ? selectedOption : placeholder}
              <ChevronDownIcon
                className="ml-3 h-5 w-5 scale-150 stroke-0 stroke-black hover:stroke-current"
                aria-hidden="true"
              />
            </Menu.Button>
          </span>
          <Transition
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              ref={dropdownRef}
              onMouseEnter={() => onMouseEnter(!open)}
              onMouseLeave={() => onMouseLeave(open)}
              static
              className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              style={getMenuStyle()}
            >
              <div className="px-1 py-1">
                {options.map((option) => (
                  <Menu.Item key={option}>
                    {({ active }) => (
                      <button
                        onClick={() => setSelectedOption(option)}
                        className={`${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                        } group flex rounded-md items-center w-full px-2  py-2 text-sm`}
                        >
                          {option}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    );
  };
  
  export default Dropdown;
  
