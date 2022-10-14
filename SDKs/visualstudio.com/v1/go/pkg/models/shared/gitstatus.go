package shared

type GitStatus struct {
	Ahead                 *int32  `json:"ahead,omitempty"`
	Behind                *int32  `json:"behind,omitempty"`
	Branch                *string `json:"branch,omitempty"`
	Commit                *string `json:"commit,omitempty"`
	HasUncommittedChanges *bool   `json:"hasUncommittedChanges,omitempty"`
	HasUnpushedChanges    *bool   `json:"hasUnpushedChanges,omitempty"`
}
