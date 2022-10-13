package shared

type ContactInformation struct {
	Email           *string `json:"email"`
	Fax             *string `json:"fax"`
	IsPreferred     *bool   `json:"isPreferred"`
	IsWebAddress    *bool   `json:"isWebAddress"`
	Line1           *string `json:"line1"`
	Line2           *string `json:"line2"`
	Line3           *string `json:"line3"`
	Line4           *string `json:"line4"`
	Line5           *string `json:"line5"`
	Notes           *string `json:"notes"`
	Phone           *string `json:"phone"`
	Postcode        *string `json:"postcode"`
	Type            *string `json:"type"`
	TypeDescription *string `json:"typeDescription"`
	TypeID          *int32  `json:"typeId"`
}
