package shared

type RepositoryInfoBody struct {
	BranchName   *string `json:"branchName,omitempty"`
	CommitID     *string `json:"commitId,omitempty"`
	Name         *string `json:"name,omitempty"`
	PrebuildHash *string `json:"prebuildHash,omitempty"`
	RepoID       *int64  `json:"repoId,omitempty"`
	URL          *string `json:"url,omitempty"`
}
