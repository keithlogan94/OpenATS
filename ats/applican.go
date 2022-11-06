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

package main

// album represents data about a record album.
type applican struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Username string `json:"username"`
}

var applicans = []applican{
	{ID: "2", Name: "Test Name", Email: "testemail1@test.com", Username: "Test1"},
	{ID: "1", Name: "Test Name 1", Email: "testemail1@test.com", Username: "Test2"},
	{ID: "1", Name: "Test Name 3", Email: "testemail1@test.com", Username: "Test3"},
	{ID: "1", Name: "Test Name 4", Email: "testemail1@test.com", Username: "Test4"},
}
