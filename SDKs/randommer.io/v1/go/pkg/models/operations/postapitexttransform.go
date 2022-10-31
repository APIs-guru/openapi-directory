package operations

import (
	"openapi/pkg/models/shared"
)

type PostAPITextTransformQueryParams struct {
	CaseType       *shared.CaseTypeEnum      `queryParam:"style=form,explode=true,name=caseType"`
	Find           *string                   `queryParam:"style=form,explode=true,name=find"`
	Replace        *string                   `queryParam:"style=form,explode=true,name=replace"`
	TextActionType shared.TextActionTypeEnum `queryParam:"style=form,explode=true,name=textActionType"`
}

type PostAPITextTransformHeaders struct {
	XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
}

type PostAPITextTransformRequests struct {
	TextDto  *shared.TextDto `request:"mediaType=application/*+json"`
	TextDto1 *shared.TextDto `request:"mediaType=application/json"`
	TextDto2 *shared.TextDto `request:"mediaType=application/json-patch+json"`
	TextDto3 *shared.TextDto `request:"mediaType=text/json"`
}

type PostAPITextTransformRequest struct {
	QueryParams PostAPITextTransformQueryParams
	Headers     PostAPITextTransformHeaders
	Request     PostAPITextTransformRequests
}

type PostAPITextTransformResponse struct {
	ContentType string
	StatusCode  int64
}
