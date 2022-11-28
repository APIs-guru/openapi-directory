package operations

import (
	"openapi/pkg/models/shared"
)

type ListArchivesPathParams struct {
	ArchiveKind shared.ArchiveKindEnum `pathParam:"style=simple,explode=false,name=archiveKind"`
}

type ListArchives200ApplicationJSONActionEnum string

const (
	ListArchives200ApplicationJSONActionEnumArchiveFull       ListArchives200ApplicationJSONActionEnum = "archiveFull"
	ListArchives200ApplicationJSONActionEnumArchiveGroups     ListArchives200ApplicationJSONActionEnum = "archiveGroups"
	ListArchives200ApplicationJSONActionEnumArchiveRules      ListArchives200ApplicationJSONActionEnum = "archiveRules"
	ListArchives200ApplicationJSONActionEnumArchiveDirectives ListArchives200ApplicationJSONActionEnum = "archiveDirectives"
	ListArchives200ApplicationJSONActionEnumArchiveParameters ListArchives200ApplicationJSONActionEnum = "archiveParameters"
)

type ListArchives200ApplicationJSONDataFull struct {
	Commiter  string `json:"commiter"`
	GitCommit string `json:"gitCommit"`
	ID        string `json:"id"`
}

type ListArchives200ApplicationJSONData struct {
	Full []ListArchives200ApplicationJSONDataFull `json:"full"`
}

type ListArchives200ApplicationJSONResultEnum string

const (
	ListArchives200ApplicationJSONResultEnumSuccess ListArchives200ApplicationJSONResultEnum = "success"
	ListArchives200ApplicationJSONResultEnumError   ListArchives200ApplicationJSONResultEnum = "error"
)

type ListArchives200ApplicationJSON struct {
	Action ListArchives200ApplicationJSONActionEnum `json:"action"`
	Data   ListArchives200ApplicationJSONData       `json:"data"`
	Result ListArchives200ApplicationJSONResultEnum `json:"result"`
}

type ListArchivesRequest struct {
	PathParams ListArchivesPathParams
}

type ListArchivesResponse struct {
	ContentType                          string
	StatusCode                           int64
	ListArchives200ApplicationJSONObject *ListArchives200ApplicationJSON
}
