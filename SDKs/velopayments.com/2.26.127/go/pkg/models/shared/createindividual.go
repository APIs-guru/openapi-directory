package shared

import (
"time")

type CreateIndividual struct {
    DateOfBirth time.Time `json:"dateOfBirth"`
    Name interface{} `json:"name"`
    NationalIdentification *string `json:"nationalIdentification,omitempty"`
    
}

