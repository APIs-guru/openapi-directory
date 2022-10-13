package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveLoyaltyProgramPathParams struct {
	ProgramID string `pathParam:"style=simple,explode=false,name=program_id"`
}

type RetrieveLoyaltyProgramSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveLoyaltyProgramRequest struct {
	PathParams RetrieveLoyaltyProgramPathParams
	Security   RetrieveLoyaltyProgramSecurity
}

type RetrieveLoyaltyProgramResponse struct {
	ContentType                    string
	RetrieveLoyaltyProgramResponse *shared.RetrieveLoyaltyProgramResponse
	StatusCode                     int64
}
