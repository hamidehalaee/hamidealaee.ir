package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	_ "github.com/lib/pq"
)

func main() {
	
	app := fiber.New()
	app.Static("/", "./public")
	

	app.Listen(":4000")
}