package shared



type PayeeAddress2 struct {
    City string `json:"city"`
    Country string `json:"country"`
    CountyOrProvince *string `json:"countyOrProvince,omitempty"`
    Line1 string `json:"line1"`
    Line2 *string `json:"line2,omitempty"`
    Line3 *string `json:"line3,omitempty"`
    Line4 *string `json:"line4,omitempty"`
    ZipOrPostcode *string `json:"zipOrPostcode,omitempty"`
    
}

