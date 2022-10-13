package shared

type PersonFollowEmbedded struct {
	Person map[string]interface{} `json:"person"`
}

type PersonFollow struct {
	Embedded *PersonFollowEmbedded `json:"_embedded"`
	PersonID *int64                `json:"person_id"`
}
