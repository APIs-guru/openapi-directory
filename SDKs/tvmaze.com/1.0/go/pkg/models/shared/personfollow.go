package shared

type PersonFollowEmbedded struct {
	Person map[string]interface{} `json:"person,omitempty"`
}

type PersonFollow struct {
	Embedded *PersonFollowEmbedded `json:"_embedded,omitempty"`
	PersonID *int64                `json:"person_id,omitempty"`
}
