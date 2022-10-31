package shared

import (
	"time"
)

type Group struct {
	Address1       *string        `json:"address1,omitempty"`
	Address2       *string        `json:"address2,omitempty"`
	Address3       *string        `json:"address3,omitempty"`
	ChildGroups    []Group        `json:"childGroups,omitempty"`
	Code           *string        `json:"code,omitempty"`
	ContactPoints  []ContactPoint `json:"contactPoints,omitempty"`
	Created        *time.Time     `json:"created,omitempty"`
	FhirResourceID *string        `json:"fhirResourceId,omitempty"`
	GroupFeatures  []GroupFeature `json:"groupFeatures,omitempty"`
	GroupType      *Lookup        `json:"groupType,omitempty"`
	ID             *int64         `json:"id,omitempty"`
	LastImportDate *time.Time     `json:"lastImportDate,omitempty"`
	LastUpdate     *time.Time     `json:"lastUpdate,omitempty"`
	Links          []Link         `json:"links,omitempty"`
	Locations      []Location     `json:"locations,omitempty"`
	Name           *string        `json:"name,omitempty"`
	ParentGroups   []Group        `json:"parentGroups,omitempty"`
	Postcode       *string        `json:"postcode,omitempty"`
	SftpUser       *string        `json:"sftpUser,omitempty"`
	ShortName      *string        `json:"shortName,omitempty"`
	Visible        *bool          `json:"visible,omitempty"`
	VisibleToJoin  *bool          `json:"visibleToJoin,omitempty"`
}
