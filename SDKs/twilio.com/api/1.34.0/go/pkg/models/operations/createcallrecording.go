package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCallRecordingServers = []string{
	"https://api.twilio.com",
}

type CreateCallRecordingPathParams struct {
	AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CallSid    string `pathParam:"style=simple,explode=false,name=CallSid"`
}

type CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum string

const (
	CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnumHead   CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum = "HEAD"
	CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnumGet    CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum = "GET"
	CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnumPost   CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum = "POST"
	CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnumPatch  CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum = "PATCH"
	CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnumPut    CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum = "PUT"
	CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnumDelete CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum = "DELETE"
)

type CreateCallRecordingRequestBodyCreateCallRecordingRequest struct {
	RecordingChannels             *string                                                          `form:"name=RecordingChannels"`
	RecordingStatusCallback       *string                                                          `form:"name=RecordingStatusCallback"`
	RecordingStatusCallbackEvent  []string                                                         `form:"name=RecordingStatusCallbackEvent"`
	RecordingStatusCallbackMethod *CreateCallRecordingRequestBodyRecordingStatusCallbackMethodEnum `form:"name=RecordingStatusCallbackMethod"`
	RecordingTrack                *string                                                          `form:"name=RecordingTrack"`
	Trim                          *string                                                          `form:"name=Trim"`
}

type CreateCallRecordingSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCallRecordingRequest struct {
	ServerURL  *string
	PathParams CreateCallRecordingPathParams
	Request    *CreateCallRecordingRequestBodyCreateCallRecordingRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateCallRecordingSecurity
}

type CreateCallRecordingResponse struct {
	ContentType                      string
	StatusCode                       int64
	APIV2010AccountCallCallRecording *shared.APIV2010AccountCallCallRecording
}
