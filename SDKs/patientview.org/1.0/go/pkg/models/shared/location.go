package shared

import (
	"time"
)

type Location struct {
	Address    *string    `json:"address"`
	Created    *time.Time `json:"created"`
	Email      *string    `json:"email"`
	ID         *int64     `json:"id"`
	Label      *string    `json:"label"`
	LastUpdate *time.Time `json:"lastUpdate"`
	Name       *string    `json:"name"`
	Phone      *string    `json:"phone"`
	Web        *string    `json:"web"`
}
