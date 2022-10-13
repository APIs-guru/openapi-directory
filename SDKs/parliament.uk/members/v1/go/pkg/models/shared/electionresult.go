package shared

import (
	"time"
)

type ElectionResult struct {
	Candidates        []ElectionCandidate `json:"candidates"`
	ConstituencyName  *string             `json:"constituencyName"`
	ElectionDate      *time.Time          `json:"electionDate"`
	ElectionID        *int32              `json:"electionId"`
	ElectionTitle     *string             `json:"electionTitle"`
	Electorate        *int32              `json:"electorate"`
	IsGeneralElection *bool               `json:"isGeneralElection"`
	IsNotional        *bool               `json:"isNotional"`
	Majority          *int32              `json:"majority"`
	Result            *string             `json:"result"`
	Turnout           *int32              `json:"turnout"`
	WinningParty      *Party              `json:"winningParty"`
}
