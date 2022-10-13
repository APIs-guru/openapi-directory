package shared

import (
	"time"
)

type RegisteredInterest struct {
	CreatedWhen     *time.Time `json:"createdWhen"`
	DeletedWhen     *time.Time `json:"deletedWhen"`
	Interest        *string    `json:"interest"`
	LastAmendedWhen *time.Time `json:"lastAmendedWhen"`
}
