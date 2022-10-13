package shared

import (
	"time"
)

type UpdatedBy struct {
	FirstName *string `json:"firstName"`
	ID        *string `json:"id"`
	LastName  *string `json:"lastName"`
}

type Updated struct {
	At *time.Time `json:"at"`
	By *UpdatedBy `json:"by"`
}
