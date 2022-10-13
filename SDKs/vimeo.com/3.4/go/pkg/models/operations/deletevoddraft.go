package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVodDraftPathParams struct {
	OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
}

type DeleteVodDraftSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVodDraftRequest struct {
	PathParams DeleteVodDraftPathParams
	Security   DeleteVodDraftSecurity
}

type DeleteVodDraftResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
