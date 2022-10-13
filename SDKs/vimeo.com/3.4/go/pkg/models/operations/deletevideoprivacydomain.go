package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteVideoPrivacyDomainPathParams struct {
	Domain  string  `pathParam:"style=simple,explode=false,name=domain"`
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type DeleteVideoPrivacyDomainSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteVideoPrivacyDomainRequest struct {
	PathParams DeleteVideoPrivacyDomainPathParams
	Security   DeleteVideoPrivacyDomainSecurity
}

type DeleteVideoPrivacyDomainResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
}
