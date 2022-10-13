package shared

import (
	"time"
)

type CisJobInstructionBaseCisJobInstructionBaseEmployerEmployer struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type CisJobInstructionBaseCisJobInstructionBaseSubContractorsSubContractor struct {
	SubContractor []interface{} `json:"SubContractor"`
}

type CisJobInstructionBaseCisJobInstructionBaseCisJobInstructionBase struct {
	Employer       *CisJobInstructionBaseCisJobInstructionBaseEmployerEmployer            `json:"Employer"`
	HoldingDate    *time.Time                                                             `json:"HoldingDate"`
	SubContractors *CisJobInstructionBaseCisJobInstructionBaseSubContractorsSubContractor `json:"SubContractors"`
}

type CisJobInstructionBase struct {
	CisJobInstructionBase *CisJobInstructionBaseCisJobInstructionBaseCisJobInstructionBase `json:"CisJobInstructionBase"`
}
