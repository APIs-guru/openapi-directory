package shared

type AssetsWithCheckpoint struct {
	Assets []Asset `json:"assets"`
	Since  int64   `json:"since"`
}
