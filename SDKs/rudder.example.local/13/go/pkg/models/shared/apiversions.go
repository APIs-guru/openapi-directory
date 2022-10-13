package shared

type APIVersions struct {
	All    []APIVersion `json:"all"`
	Latest *int64       `json:"latest"`
}
