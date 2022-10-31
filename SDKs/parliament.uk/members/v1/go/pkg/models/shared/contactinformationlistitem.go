package shared



type ContactInformationListItem struct {
    Links []Link `json:"links,omitempty"`
    Value []ContactInformation `json:"value,omitempty"`
    
}

