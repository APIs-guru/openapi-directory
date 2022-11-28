package shared

type Individual2 struct {
	DateOfBirth            string      `json:"dateOfBirth"`
	Name                   interface{} `json:"name"`
	NationalIdentification *string     `json:"nationalIdentification,omitempty"`
}

type Individual2Input struct {
	Name interface{} `json:"name"`
}
