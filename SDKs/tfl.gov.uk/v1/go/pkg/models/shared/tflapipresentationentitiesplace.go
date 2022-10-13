package shared

type TflAPIPresentationEntitiesPlace struct {
	AdditionalProperties []TflAPIPresentationEntitiesAdditionalProperties `json:"additionalProperties"`
	Children             []TflAPIPresentationEntitiesPlace                `json:"children"`
	ChildrenUrls         []string                                         `json:"childrenUrls"`
	CommonName           *string                                          `json:"commonName"`
	Distance             *float64                                         `json:"distance"`
	ID                   *string                                          `json:"id"`
	Lat                  *float64                                         `json:"lat"`
	Lon                  *float64                                         `json:"lon"`
	PlaceType            *string                                          `json:"placeType"`
	URL                  *string                                          `json:"url"`
}
