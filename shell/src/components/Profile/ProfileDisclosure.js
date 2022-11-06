/*

Open ATS - Applicant Tracking Software

Copyright (C) 2022  Keith Becker
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see https://www.gnu.org/licenses/agpl-3.0.

*/


import { React } from "react";
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  

export default (props) => {
    return (
        <div className="divide-y divide-gray-200 border-t">
                  <Disclosure as="div" key={"actions"}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                            >
                              { props.title }
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                          <ul role="list">
                              <li key="test">Test</li>
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
              </div>
    )
}