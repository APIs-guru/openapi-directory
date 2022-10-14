package shared

import (
	"time"
)

type CisJobInstructionBaseCisJobInstructionBaseEmployerEmployer struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type CisJobInstructionBaseCisJobInstructionBaseSubContractorsSubContractor struct {
	SubContractor []interface{} `json:"SubContractor,omitempty"`
}

type CisJobInstructionBaseCisJobInstructionBaseCisJobInstructionBase struct {
	Employer       *CisJobInstructionBaseCisJobInstructionBaseEmployerEmployer            `json:"Employer,omitempty"`
	HoldingDate    *time.Time                                                             `json:"HoldingDate,omitempty"`
	SubContractors *CisJobInstructionBaseCisJobInstructionBaseSubContractorsSubContractor `json:"SubContractors,omitempty"`
}

type CisJobInstructionBase struct {
	CisJobInstructionBase *CisJobInstructionBaseCisJobInstructionBaseCisJobInstructionBase `json:"CisJobInstructionBase,omitempty"`
}
