package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArchivePathParams struct {
	ArchiveKind shared.ArchiveKindEnum `pathParam:"style=simple,explode=false,name=archiveKind"`
}

type CreateArchiveRequest struct {
	PathParams CreateArchivePathParams
}

type CreateArchive200ApplicationJSONActionEnum string

const (
	CreateArchive200ApplicationJSONActionEnumArchiveFull       CreateArchive200ApplicationJSONActionEnum = "archiveFull"
	CreateArchive200ApplicationJSONActionEnumArchiveGroups     CreateArchive200ApplicationJSONActionEnum = "archiveGroups"
	CreateArchive200ApplicationJSONActionEnumArchiveRules      CreateArchive200ApplicationJSONActionEnum = "archiveRules"
	CreateArchive200ApplicationJSONActionEnumArchiveDirectives CreateArchive200ApplicationJSONActionEnum = "archiveDirectives"
	CreateArchive200ApplicationJSONActionEnumArchiveParameters CreateArchive200ApplicationJSONActionEnum = "archiveParameters"
)

type CreateArchive200ApplicationJSONDataFull struct {
	Commiter  string `json:"commiter"`
	GitCommit string `json:"gitCommit"`
	ID        string `json:"id"`
}

type CreateArchive200ApplicationJSONData struct {
	Full CreateArchive200ApplicationJSONDataFull `json:"full"`
}

type CreateArchive200ApplicationJSONResultEnum string

const (
	CreateArchive200ApplicationJSONResultEnumSuccess CreateArchive200ApplicationJSONResultEnum = "success"
	CreateArchive200ApplicationJSONResultEnumError   CreateArchive200ApplicationJSONResultEnum = "error"
)

type CreateArchive200ApplicationJSON struct {
	Action CreateArchive200ApplicationJSONActionEnum `json:"action"`
	Data   CreateArchive200ApplicationJSONData       `json:"data"`
	Result CreateArchive200ApplicationJSONResultEnum `json:"result"`
}

type CreateArchiveResponse struct {
	ContentType                           string
	StatusCode                            int64
	CreateArchive200ApplicationJSONObject *CreateArchive200ApplicationJSON
}
