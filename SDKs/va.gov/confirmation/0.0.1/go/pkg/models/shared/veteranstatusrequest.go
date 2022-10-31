package shared




type VeteranStatusRequestGenderEnum string

const (
    VeteranStatusRequestGenderEnumM VeteranStatusRequestGenderEnum = "M"
VeteranStatusRequestGenderEnumF VeteranStatusRequestGenderEnum = "F"
)


type VeteranStatusRequest struct {
    BirthDate string `json:"birth_date"`
    FirstName string `json:"first_name"`
    Gender *VeteranStatusRequestGenderEnum `json:"gender,omitempty"`
    LastName string `json:"last_name"`
    MiddleName *string `json:"middle_name,omitempty"`
    Ssn string `json:"ssn"`
    
}

