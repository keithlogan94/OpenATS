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

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
)

type startupObj struct {
	DebugMode       bool
	StartServerHost string
	StartServerPort string
}

var start startupObj = startupObj{}

func getApplicans(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, applicans)
}

func init() {
	start.StartServerHost = os.Getenv("START_SERVER_HOST")
	if start.StartServerHost == "" {
		start.StartServerHost = "0.0.0.0"
	}
	start.StartServerPort = os.Getenv("START_SERVER_PORT")
	if start.StartServerPort == "" {
		start.StartServerPort = "8080"
	}
	start.DebugMode = os.Getenv("DEBUG") == "true"

	fmt.Println("START_SERVER_HOST:", start.StartServerHost)
	fmt.Println("START_SERVER_PORT:", start.StartServerPort)
}

func main() {
	fmt.Println("THIS IS A TEST")
	fmt.Println("OpenATS Restful Backend Service")

	router := gin.Default()
	router.GET("/applicans", getApplicans)

	router.Run(start.StartServerHost + ":" + start.StartServerPort)
}
