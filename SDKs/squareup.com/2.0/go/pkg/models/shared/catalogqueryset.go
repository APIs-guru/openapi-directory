package shared

type CatalogQuerySet struct {
	AttributeName   string   `json:"attribute_name"`
	AttributeValues []string `json:"attribute_values"`
}
