package shared

type GitStatus struct {
	Ahead                 *int32  `json:"ahead"`
	Behind                *int32  `json:"behind"`
	Branch                *string `json:"branch"`
	Commit                *string `json:"commit"`
	HasUncommittedChanges *bool   `json:"hasUncommittedChanges"`
	HasUnpushedChanges    *bool   `json:"hasUnpushedChanges"`
}
