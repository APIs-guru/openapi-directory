package shared

import (
	"time"
)

type DpsJobInstructionDpsJobInstructionEmployer struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type DpsJobInstructionDpsJobInstructionType struct {
	Type []interface{} `json:"Type,omitempty"`
}

type DpsJobInstructionDpsJobInstructionMessage struct {
	Message []interface{} `json:"Message,omitempty"`
}

type DpsJobInstructionDpsJobInstruction struct {
	Apply             *bool                                       `json:"Apply,omitempty"`
	Employer          *DpsJobInstructionDpsJobInstructionEmployer `json:"Employer,omitempty"`
	FromDate          *time.Time                                  `json:"FromDate,omitempty"`
	HoldingDate       *time.Time                                  `json:"HoldingDate,omitempty"`
	MessageTypes      *DpsJobInstructionDpsJobInstructionType     `json:"MessageTypes,omitempty"`
	MessagesToProcess *DpsJobInstructionDpsJobInstructionMessage  `json:"MessagesToProcess,omitempty"`
	Retrieve          *bool                                       `json:"Retrieve,omitempty"`
}

type DpsJobInstruction struct {
	DpsJobInstruction *DpsJobInstructionDpsJobInstruction `json:"DpsJobInstruction,omitempty"`
}
