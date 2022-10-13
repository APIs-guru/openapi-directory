package shared

type CategoryResourceAttributes struct {
	Name string `json:"name"`
}

type CategoryResourceLinks struct {
	Self string `json:"self"`
}

type CategoryResourceRelationshipsChildrenData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type CategoryResourceRelationshipsChildrenLinks struct {
	Related string `json:"related"`
}

type CategoryResourceRelationshipsChildren struct {
	Data  []CategoryResourceRelationshipsChildrenData `json:"data"`
	Links *CategoryResourceRelationshipsChildrenLinks `json:"links"`
}

type CategoryResourceRelationshipsParentData struct {
	ID   string `json:"id"`
	Type string `json:"type"`
}

type CategoryResourceRelationshipsParentLinks struct {
	Related string `json:"related"`
}

type CategoryResourceRelationshipsParent struct {
	Data  CategoryResourceRelationshipsParentData   `json:"data"`
	Links *CategoryResourceRelationshipsParentLinks `json:"links"`
}

type CategoryResourceRelationships struct {
	Children CategoryResourceRelationshipsChildren `json:"children"`
	Parent   CategoryResourceRelationshipsParent   `json:"parent"`
}

type CategoryResource struct {
	Attributes    CategoryResourceAttributes    `json:"attributes"`
	ID            string                        `json:"id"`
	Links         *CategoryResourceLinks        `json:"links"`
	Relationships CategoryResourceRelationships `json:"relationships"`
	Type          string                        `json:"type"`
}
