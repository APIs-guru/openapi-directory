package shared

type PayorAddressV2 struct {
	City             string  `json:"city"`
	Country          string  `json:"country"`
	CountyOrProvince *string `json:"countyOrProvince"`
	Line1            string  `json:"line1"`
	Line2            *string `json:"line2"`
	Line3            *string `json:"line3"`
	Line4            *string `json:"line4"`
	ZipOrPostcode    *string `json:"zipOrPostcode"`
}
