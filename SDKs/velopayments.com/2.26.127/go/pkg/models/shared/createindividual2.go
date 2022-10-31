package shared

import (
"time")

type CreateIndividual2 struct {
    DateOfBirth time.Time `json:"dateOfBirth"`
    Name interface{} `json:"name"`
    NationalIdentification *string `json:"nationalIdentification,omitempty"`
    
}

