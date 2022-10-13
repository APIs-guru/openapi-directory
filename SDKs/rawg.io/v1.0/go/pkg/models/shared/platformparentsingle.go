package shared

type PlatformParentSingle struct {
	ID        *int64     `json:"id"`
	Name      string     `json:"name"`
	Platforms []Platform `json:"platforms"`
	Slug      *string    `json:"slug"`
}
