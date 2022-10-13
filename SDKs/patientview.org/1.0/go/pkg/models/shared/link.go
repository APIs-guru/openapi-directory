package shared

import (
	"time"
)

type Link struct {
	Created      *time.Time `json:"created"`
	DisplayOrder *int32     `json:"displayOrder"`
	ID           *int64     `json:"id"`
	LastUpdate   *time.Time `json:"lastUpdate"`
	Link         *string    `json:"link"`
	LinkType     *Lookup    `json:"linkType"`
	Name         *string    `json:"name"`
}
