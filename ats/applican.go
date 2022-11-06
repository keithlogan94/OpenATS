package main

// album represents data about a record album.
type applican struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Email    string `json:"email"`
	Username string `json:"username"`
}

var applicans = []applican{
	{ID: "2", Name: "Test Name 2", Email: "testemail1@test.com", Username: "Test1"},
	{ID: "1", Name: "Test Name 1", Email: "testemail1@test.com", Username: "Test2"},
	{ID: "1", Name: "Test Name 3", Email: "testemail1@test.com", Username: "Test3"},
	{ID: "1", Name: "Test Name 4", Email: "testemail1@test.com", Username: "Test4"},
}
