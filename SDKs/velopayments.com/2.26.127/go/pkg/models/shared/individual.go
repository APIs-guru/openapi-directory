package shared

type Individual struct {
	DateOfBirth            string      `json:"dateOfBirth"`
	Name                   interface{} `json:"name"`
	NationalIdentification *string     `json:"nationalIdentification"`
}
