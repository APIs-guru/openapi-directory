package shared

import (
	"time"
)

type Location struct {
	Address    *string    `json:"address,omitempty"`
	Created    *time.Time `json:"created,omitempty"`
	Email      *string    `json:"email,omitempty"`
	ID         *int64     `json:"id,omitempty"`
	Label      *string    `json:"label,omitempty"`
	LastUpdate *time.Time `json:"lastUpdate,omitempty"`
	Name       *string    `json:"name,omitempty"`
	Phone      *string    `json:"phone,omitempty"`
	Web        *string    `json:"web,omitempty"`
}
