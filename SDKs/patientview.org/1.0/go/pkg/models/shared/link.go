package shared

import (
	"time"
)

type Link struct {
	Created      *time.Time `json:"created,omitempty"`
	DisplayOrder *int32     `json:"displayOrder,omitempty"`
	ID           *int64     `json:"id,omitempty"`
	LastUpdate   *time.Time `json:"lastUpdate,omitempty"`
	Link         *string    `json:"link,omitempty"`
	LinkType     *Lookup    `json:"linkType,omitempty"`
	Name         *string    `json:"name,omitempty"`
}
