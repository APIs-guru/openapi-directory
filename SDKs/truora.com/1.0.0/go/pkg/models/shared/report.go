package shared

import (
	"time"
)

type Report struct {
	CreatedBy          *string   `json:"created_by"`
	CreatedChecksCount *int64    `json:"created_checks_count"`
	CreationDate       time.Time `json:"creation_date"`
	HasData            *bool     `json:"has_data"`
	ID                 string    `json:"id"`
	InvalidChecksCount *int64    `json:"invalid_checks_count"`
	Name               string    `json:"name"`
	Size               *int64    `json:"size"`
	UpdateDate         time.Time `json:"update_date"`
}
