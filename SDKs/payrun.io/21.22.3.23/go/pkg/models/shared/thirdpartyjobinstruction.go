package shared

import (
	"time"
)

// ThirdPartyJobInstructionThirdPartyJobInstructionEmployer
// The third party job instructions' employer
type ThirdPartyJobInstructionThirdPartyJobInstructionEmployer struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type ThirdPartyJobInstructionThirdPartyJobInstruction struct {
	ClientIDUniqueKey     *string                                                   `json:"ClientIdUniqueKey,omitempty"`
	ClientSecretUniqueKey *string                                                   `json:"ClientSecretUniqueKey,omitempty"`
	Employer              *ThirdPartyJobInstructionThirdPartyJobInstructionEmployer `json:"Employer,omitempty"`
	HoldingDate           *time.Time                                                `json:"HoldingDate,omitempty"`
	InstructionTypeName   *string                                                   `json:"InstructionTypeName,omitempty"`
	PayScheduleUniqueKey  *string                                                   `json:"PayScheduleUniqueKey,omitempty"`
	PaymentDate           *time.Time                                                `json:"PaymentDate,omitempty"`
	RemoteEndpoint        *string                                                   `json:"RemoteEndpoint,omitempty"`
}

type ThirdPartyJobInstruction struct {
	ThirdPartyJobInstruction *ThirdPartyJobInstructionThirdPartyJobInstruction `json:"ThirdPartyJobInstruction,omitempty"`
}
