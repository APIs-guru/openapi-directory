package shared

type IndividualInput struct {
	Name interface{} `json:"name"`
}

type Individual struct {
	DateOfBirth            string      `json:"dateOfBirth"`
	Name                   interface{} `json:"name"`
	NationalIdentification *string     `json:"nationalIdentification,omitempty"`
}
