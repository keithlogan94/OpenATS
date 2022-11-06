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
		start.StartServerHost = "localhost"
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
	fmt.Println("OpenATS Restful Backend Service")

	router := gin.Default()
	router.GET("/applicans", getApplicans)

	router.Run(start.StartServerHost + ":" + start.StartServerPort)
}
