package operations

import (
	"openapi/pkg/models/shared"
)

type GetExamples1PathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
}

type GetExamples1SourceEnum string

const (
	GetExamples1SourceEnumAll      GetExamples1SourceEnum = "all"
	GetExamples1SourceEnumFeedback GetExamples1SourceEnum = "feedback"
	GetExamples1SourceEnumUpload   GetExamples1SourceEnum = "upload"
)

type GetExamples1QueryParams struct {
	Count  *string                 `queryParam:"style=form,explode=true,name=count"`
	Offset *string                 `queryParam:"style=form,explode=true,name=offset"`
	Source *GetExamples1SourceEnum `queryParam:"style=form,explode=true,name=source"`
}

type GetExamples1Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetExamples1Request struct {
	PathParams  GetExamples1PathParams
	QueryParams GetExamples1QueryParams
	Security    GetExamples1Security
}

type GetExamples1Response struct {
	ContentType string
	ExampleList *shared.ExampleList
	StatusCode  int64
}
