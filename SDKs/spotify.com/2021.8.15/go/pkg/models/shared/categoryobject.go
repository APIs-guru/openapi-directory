package shared

type CategoryObject struct {
	Href  *string       `json:"href"`
	Icons []ImageObject `json:"icons"`
	ID    *string       `json:"id"`
	Name  *string       `json:"name"`
}
