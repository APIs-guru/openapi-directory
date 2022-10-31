package shared



type Language struct {
    Ident *string `json:"ident,omitempty"`
    Name *string `json:"name,omitempty"`
    SubLanguages []Language `json:"subLanguages,omitempty"`
    
}

