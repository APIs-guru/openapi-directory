package operations

import (
	"openapi/pkg/models/shared"
)

type StopPointMetaCategoriesResponse struct {
	Body                                          []byte
	ContentType                                   string
	StatusCode                                    int64
	TflAPIPresentationEntitiesStopPointCategories []shared.TflAPIPresentationEntitiesStopPointCategory
}
