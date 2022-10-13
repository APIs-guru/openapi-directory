package operations

type HooksPostActionEnum string

const (
	HooksPostActionEnumSubscribe   HooksPostActionEnum = "subscribe"
	HooksPostActionEnumUnsubscribe HooksPostActionEnum = "unsubscribe"
)

type HooksPostEventTypeEnum string

const (
	HooksPostEventTypeEnumAll         HooksPostEventTypeEnum = "all"
	HooksPostEventTypeEnumSmsMo       HooksPostEventTypeEnum = "sms_mo"
	HooksPostEventTypeEnumDlr         HooksPostEventTypeEnum = "dlr"
	HooksPostEventTypeEnumVoiceStatus HooksPostEventTypeEnum = "voice_status"
)

type HooksPostRequestMethodEnum string

const (
	HooksPostRequestMethodEnumPost HooksPostRequestMethodEnum = "POST"
	HooksPostRequestMethodEnumJSON HooksPostRequestMethodEnum = "JSON"
	HooksPostRequestMethodEnumGet  HooksPostRequestMethodEnum = "GET"
)

type HooksPostQueryParams struct {
	Action        HooksPostActionEnum         `queryParam:"style=form,explode=true,name=action"`
	EventType     *HooksPostEventTypeEnum     `queryParam:"style=form,explode=true,name=event_type"`
	ID            *int64                      `queryParam:"style=form,explode=true,name=id"`
	RequestMethod *HooksPostRequestMethodEnum `queryParam:"style=form,explode=true,name=request_method"`
	TargetURL     *string                     `queryParam:"style=form,explode=true,name=target_url"`
}

type HooksPostRequest struct {
	QueryParams HooksPostQueryParams
}

type HooksPost200ApplicationJSON struct {
	ID      *int64 `json:"id"`
	Success *bool  `json:"success"`
}

type HooksPostResponse struct {
	ContentType                       string
	HooksPost200ApplicationJSONObject *HooksPost200ApplicationJSON
	StatusCode                        int64
}
