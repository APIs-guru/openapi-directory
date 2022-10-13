package shared

type Language struct {
	Ident        *string    `json:"ident"`
	Name         *string    `json:"name"`
	SubLanguages []Language `json:"subLanguages"`
}
