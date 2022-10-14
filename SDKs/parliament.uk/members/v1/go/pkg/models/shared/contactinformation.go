package shared

type ContactInformation struct {
	Email           *string `json:"email,omitempty"`
	Fax             *string `json:"fax,omitempty"`
	IsPreferred     *bool   `json:"isPreferred,omitempty"`
	IsWebAddress    *bool   `json:"isWebAddress,omitempty"`
	Line1           *string `json:"line1,omitempty"`
	Line2           *string `json:"line2,omitempty"`
	Line3           *string `json:"line3,omitempty"`
	Line4           *string `json:"line4,omitempty"`
	Line5           *string `json:"line5,omitempty"`
	Notes           *string `json:"notes,omitempty"`
	Phone           *string `json:"phone,omitempty"`
	Postcode        *string `json:"postcode,omitempty"`
	Type            *string `json:"type,omitempty"`
	TypeDescription *string `json:"typeDescription,omitempty"`
	TypeID          *int32  `json:"typeId,omitempty"`
}
