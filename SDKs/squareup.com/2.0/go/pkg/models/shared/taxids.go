package shared

type TaxIds struct {
	EuVat   *string `json:"eu_vat"`
	FrNaf   *string `json:"fr_naf"`
	FrSiret *string `json:"fr_siret"`
}
