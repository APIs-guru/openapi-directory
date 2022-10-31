package shared

type TflAPIPresentationEntitiesPlace struct {
	AdditionalProperties []TflAPIPresentationEntitiesAdditionalProperties `json:"additionalProperties,omitempty"`
	Children             []TflAPIPresentationEntitiesPlace                `json:"children,omitempty"`
	ChildrenUrls         []string                                         `json:"childrenUrls,omitempty"`
	CommonName           *string                                          `json:"commonName,omitempty"`
	Distance             *float64                                         `json:"distance,omitempty"`
	ID                   *string                                          `json:"id,omitempty"`
	Lat                  *float64                                         `json:"lat,omitempty"`
	Lon                  *float64                                         `json:"lon,omitempty"`
	PlaceType            *string                                          `json:"placeType,omitempty"`
	URL                  *string                                          `json:"url,omitempty"`
}
