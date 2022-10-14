package operations

import (
	"openapi/pkg/models/shared"
)

type RestoreArchiveArchiveRestoreKindEnum string

const (
	RestoreArchiveArchiveRestoreKindEnumLatestArchive RestoreArchiveArchiveRestoreKindEnum = "latestArchive"
	RestoreArchiveArchiveRestoreKindEnumLatestCommit  RestoreArchiveArchiveRestoreKindEnum = "latestCommit"
	RestoreArchiveArchiveRestoreKindEnumArchiveID     RestoreArchiveArchiveRestoreKindEnum = "archive ID"
)

type RestoreArchivePathParams struct {
	ArchiveKind        shared.ArchiveKindEnum               `pathParam:"style=simple,explode=false,name=archiveKind"`
	ArchiveRestoreKind RestoreArchiveArchiveRestoreKindEnum `pathParam:"style=simple,explode=false,name=archiveRestoreKind"`
}

type RestoreArchiveRequest struct {
	PathParams RestoreArchivePathParams
}

type RestoreArchive200ApplicationJSONActionEnum string

const (
	RestoreArchive200ApplicationJSONActionEnumRestoreFullLatestArchive       RestoreArchive200ApplicationJSONActionEnum = "restoreFullLatestArchive"
	RestoreArchive200ApplicationJSONActionEnumRestoreGroupLatestArchive      RestoreArchive200ApplicationJSONActionEnum = "restoreGroupLatestArchive"
	RestoreArchive200ApplicationJSONActionEnumRestoreRulesLatestArchive      RestoreArchive200ApplicationJSONActionEnum = "restoreRulesLatestArchive"
	RestoreArchive200ApplicationJSONActionEnumRestoreDirectivesLatestArchive RestoreArchive200ApplicationJSONActionEnum = "restoreDirectivesLatestArchive"
	RestoreArchive200ApplicationJSONActionEnumRestoreParametersLatestArchive RestoreArchive200ApplicationJSONActionEnum = "restoreParametersLatestArchive"
	RestoreArchive200ApplicationJSONActionEnumRestoreFullLatestCommit        RestoreArchive200ApplicationJSONActionEnum = "restoreFullLatestCommit"
	RestoreArchive200ApplicationJSONActionEnumRestoreGroupLatestCommit       RestoreArchive200ApplicationJSONActionEnum = "restoreGroupLatestCommit"
	RestoreArchive200ApplicationJSONActionEnumRestoreRulesLatestCommit       RestoreArchive200ApplicationJSONActionEnum = "restoreRulesLatestCommit"
	RestoreArchive200ApplicationJSONActionEnumRestoreDirectivesLatestCommit  RestoreArchive200ApplicationJSONActionEnum = "restoreDirectivesLatestCommit"
	RestoreArchive200ApplicationJSONActionEnumRestoreParametersLatestCommit  RestoreArchive200ApplicationJSONActionEnum = "restoreParametersLatestCommit"
	RestoreArchive200ApplicationJSONActionEnumArchiveFullDateRestore         RestoreArchive200ApplicationJSONActionEnum = "archiveFullDateRestore"
	RestoreArchive200ApplicationJSONActionEnumArchiveGroupDateRestore        RestoreArchive200ApplicationJSONActionEnum = "archiveGroupDateRestore"
	RestoreArchive200ApplicationJSONActionEnumArchiveRulesDateRestore        RestoreArchive200ApplicationJSONActionEnum = "archiveRulesDateRestore"
	RestoreArchive200ApplicationJSONActionEnumArchiveDirectivesDateRestore   RestoreArchive200ApplicationJSONActionEnum = "archiveDirectivesDateRestore"
	RestoreArchive200ApplicationJSONActionEnumArchiveParametersDateRestore   RestoreArchive200ApplicationJSONActionEnum = "archiveParametersDateRestore"
)

type RestoreArchive200ApplicationJSONData struct {
	Directive  *string `json:"directive,omitempty"`
	Full       *string `json:"full,omitempty"`
	Groups     *string `json:"groups,omitempty"`
	Parameters *string `json:"parameters,omitempty"`
	Rules      *string `json:"rules,omitempty"`
}

type RestoreArchive200ApplicationJSONResultEnum string

const (
	RestoreArchive200ApplicationJSONResultEnumSuccess RestoreArchive200ApplicationJSONResultEnum = "success"
	RestoreArchive200ApplicationJSONResultEnumError   RestoreArchive200ApplicationJSONResultEnum = "error"
)

type RestoreArchive200ApplicationJSON struct {
	Action RestoreArchive200ApplicationJSONActionEnum `json:"action"`
	Data   RestoreArchive200ApplicationJSONData       `json:"data"`
	Result RestoreArchive200ApplicationJSONResultEnum `json:"result"`
}

type RestoreArchiveResponse struct {
	ContentType                            string
	StatusCode                             int64
	RestoreArchive200ApplicationJSONObject *RestoreArchive200ApplicationJSON
}
