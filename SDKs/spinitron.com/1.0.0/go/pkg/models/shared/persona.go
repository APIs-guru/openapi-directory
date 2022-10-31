package shared



type PersonaLinks struct {
    Self *Link `json:"self,omitempty"`
    Shows []Link `json:"shows,omitempty"`
    
}

type Persona struct {
    Links *PersonaLinks `json:"_links,omitempty"`
    Bio *string `json:"bio,omitempty"`
    Email *string `json:"email,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Image *string `json:"image,omitempty"`
    Name *string `json:"name,omitempty"`
    Since *int64 `json:"since,omitempty"`
    Website *string `json:"website,omitempty"`
    
}

