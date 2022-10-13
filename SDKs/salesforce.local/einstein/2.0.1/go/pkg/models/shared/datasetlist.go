package shared

type DatasetList struct {
	Data   []Dataset `json:"data"`
	Object *string   `json:"object"`
}
