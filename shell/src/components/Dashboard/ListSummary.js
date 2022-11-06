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


import List from "./List"

export default (props) => {
    return (
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">

        <div className="text-left">
          <div className="sm:flex-auto">
            <h1 className="text-xl font-semibold text-gray-900 text-left">{ props.title }</h1>
            <p className="mt-2 text-sm text-gray-700">
              { props.description }
            </p>
          </div>
          
        </div>

          <List />
      </div>
    )
  }
  