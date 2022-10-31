package shared

type CurrencyFormat struct {
	CurrencySymbol   string `json:"currency_symbol"`
	DecimalDigits    int32  `json:"decimal_digits"`
	DecimalSeparator string `json:"decimal_separator"`
	DisplaySymbol    bool   `json:"display_symbol"`
	ExampleFormat    string `json:"example_format"`
	GroupSeparator   string `json:"group_separator"`
	IsoCode          string `json:"iso_code"`
	SymbolFirst      bool   `json:"symbol_first"`
}
