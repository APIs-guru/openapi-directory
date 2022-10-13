package operations

type PostScrobbleEpisodesRequestBody struct {
	EpisodeID *int64       `json:"episode_id"`
	MarkedAt  *int64       `json:"marked_at"`
	Type      *interface{} `json:"type"`
}

type PostScrobbleEpisodesRequest struct {
	Request []PostScrobbleEpisodesRequestBody `request:"mediaType=application/json"`
}

type PostScrobbleEpisodesResponse struct {
	BulkResponse []interface{}
	ContentType  string
	StatusCode   int64
}
