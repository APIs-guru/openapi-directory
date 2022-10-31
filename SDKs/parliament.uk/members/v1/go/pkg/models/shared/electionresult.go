package shared

import (
"time")

type ElectionResult struct {
    Candidates []ElectionCandidate `json:"candidates,omitempty"`
    ConstituencyName *string `json:"constituencyName,omitempty"`
    ElectionDate *time.Time `json:"electionDate,omitempty"`
    ElectionID *int32 `json:"electionId,omitempty"`
    ElectionTitle *string `json:"electionTitle,omitempty"`
    Electorate *int32 `json:"electorate,omitempty"`
    IsGeneralElection *bool `json:"isGeneralElection,omitempty"`
    IsNotional *bool `json:"isNotional,omitempty"`
    Majority *int32 `json:"majority,omitempty"`
    Result *string `json:"result,omitempty"`
    Turnout *int32 `json:"turnout,omitempty"`
    WinningParty *Party `json:"winningParty,omitempty"`
    
}

