package shared

type BiographyExperienceListItem struct {
	Links []Link                `json:"links"`
	Value []BiographyExperience `json:"value"`
}
