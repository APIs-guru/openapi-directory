package operations

type ReleaseEventAPIGetNamesQueryParams struct {
	MaxResults *int32  `queryParam:"style=form,explode=true,name=maxResults"`
	Query      *string `queryParam:"style=form,explode=true,name=query"`
}

type ReleaseEventAPIGetNamesRequest struct {
	QueryParams ReleaseEventAPIGetNamesQueryParams
}

type ReleaseEventAPIGetNamesResponse struct {
	Body                                              []byte
	ContentType                                       string
	ReleaseEventAPIGetNames200ApplicationJSONStrings  []string
	ReleaseEventAPIGetNames200ApplicationJsonpStrings []string
	ReleaseEventAPIGetNames200TextJSONStrings         []string
	StatusCode                                        int64
}
