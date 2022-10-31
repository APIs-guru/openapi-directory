package shared

import (
"time")

type CisJobInstructionBaseCisJobInstructionBaseEmployer struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}

type CisJobInstructionBaseCisJobInstructionBaseSubContractor struct {
    SubContractor []interface{} `json:"SubContractor,omitempty"`
    
}

type CisJobInstructionBaseCisJobInstructionBase struct {
    Employer *CisJobInstructionBaseCisJobInstructionBaseEmployer `json:"Employer,omitempty"`
    HoldingDate *time.Time `json:"HoldingDate,omitempty"`
    SubContractors *CisJobInstructionBaseCisJobInstructionBaseSubContractor `json:"SubContractors,omitempty"`
    
}

type CisJobInstructionBase struct {
    CisJobInstructionBase *CisJobInstructionBaseCisJobInstructionBase `json:"CisJobInstructionBase,omitempty"`
    
}

