package shared

type EmergencyContact struct {
	Address1         *string `json:"address1"`
	Address2         *string `json:"address2"`
	City             *string `json:"city"`
	Country          *string `json:"country"`
	County           *string `json:"county"`
	Email            *string `json:"email"`
	FirstName        string  `json:"firstName"`
	HomePhone        *string `json:"homePhone"`
	LastName         string  `json:"lastName"`
	MobilePhone      *string `json:"mobilePhone"`
	Notes            *string `json:"notes"`
	Pager            *string `json:"pager"`
	PrimaryPhone     *string `json:"primaryPhone"`
	Priority         *string `json:"priority"`
	Relationship     *string `json:"relationship"`
	State            *string `json:"state"`
	SyncEmployeeInfo *bool   `json:"syncEmployeeInfo"`
	WorkExtension    *string `json:"workExtension"`
	WorkPhone        *string `json:"workPhone"`
	Zip              *string `json:"zip"`
}
