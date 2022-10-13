package shared

type RepositoryInfoBody struct {
	BranchName   *string `json:"branchName"`
	CommitID     *string `json:"commitId"`
	Name         *string `json:"name"`
	PrebuildHash *string `json:"prebuildHash"`
	RepoID       *int64  `json:"repoId"`
	URL          *string `json:"url"`
}
