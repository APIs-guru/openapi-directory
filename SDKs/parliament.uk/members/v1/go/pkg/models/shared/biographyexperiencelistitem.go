package shared

type BiographyExperienceListItem struct {
	Links []Link                `json:"links,omitempty"`
	Value []BiographyExperience `json:"value,omitempty"`
}
