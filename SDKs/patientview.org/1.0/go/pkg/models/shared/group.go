package shared

import (
	"time"
)

type Group struct {
	Address1       *string        `json:"address1"`
	Address2       *string        `json:"address2"`
	Address3       *string        `json:"address3"`
	ChildGroups    []Group        `json:"childGroups"`
	Code           *string        `json:"code"`
	ContactPoints  []ContactPoint `json:"contactPoints"`
	Created        *time.Time     `json:"created"`
	FhirResourceID *string        `json:"fhirResourceId"`
	GroupFeatures  []GroupFeature `json:"groupFeatures"`
	GroupType      *Lookup        `json:"groupType"`
	ID             *int64         `json:"id"`
	LastImportDate *time.Time     `json:"lastImportDate"`
	LastUpdate     *time.Time     `json:"lastUpdate"`
	Links          []Link         `json:"links"`
	Locations      []Location     `json:"locations"`
	Name           *string        `json:"name"`
	ParentGroups   []Group        `json:"parentGroups"`
	Postcode       *string        `json:"postcode"`
	SftpUser       *string        `json:"sftpUser"`
	ShortName      *string        `json:"shortName"`
	Visible        *bool          `json:"visible"`
	VisibleToJoin  *bool          `json:"visibleToJoin"`
}
