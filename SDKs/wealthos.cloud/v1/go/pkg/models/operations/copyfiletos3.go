package operations

import (
	"openapi/pkg/models/shared"
)

type CopyFileToS3Headers struct {
	XAPIKey string `header:"style=simple,explode=false,name=x-api-key"`
}

type CopyFileToS3Security struct {
	APISecretKey shared.SchemeAPISecretKey `security:"scheme,type=apiKey,subtype=header"`
}

type CopyFileToS3Request struct {
	Headers  CopyFileToS3Headers
	Request  *interface{} `request:"mediaType=application/json"`
	Security CopyFileToS3Security
}

type CopyFileToS3Response struct {
	ContentType                       string
	StatusCode                        int64
	CopyFileToS3200ApplicationJSONAny *interface{}
	CopyFileToS3400ApplicationJSONAny *interface{}
	CopyFileToS3401ApplicationJSONAny *interface{}
	CopyFileToS3403ApplicationJSONAny *interface{}
	CopyFileToS3404ApplicationJSONAny *interface{}
	CopyFileToS3429ApplicationJSONAny *interface{}
	CopyFileToS3500ApplicationJSONAny *interface{}
}
