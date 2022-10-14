package operations

type OptCapProgramInPriceHeaders struct {
	Authorization         string  `header:"name=Authorization"`
	WmConsumerChannelType *string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string  `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string  `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string  `header:"name=WM_SVC.NAME"`
}

type OptCapProgramInPriceRequestBody struct {
	SubsidyEnrolled   *bool `json:"subsidyEnrolled,omitempty"`
	SubsidyPreference *bool `json:"subsidyPreference,omitempty"`
}

type OptCapProgramInPriceRequest struct {
	Headers OptCapProgramInPriceHeaders
	Request OptCapProgramInPriceRequestBody `request:"mediaType=application/json"`
}

type OptCapProgramInPrice200ApplicationJSONStatusInfo struct {
	SubsidyEnrolled   *bool `json:"subsidyEnrolled,omitempty"`
	SubsidyPreference *bool `json:"subsidyPreference,omitempty"`
}

type OptCapProgramInPrice200ApplicationJSON struct {
	MartID     *string                                           `json:"martId,omitempty"`
	StatusInfo *OptCapProgramInPrice200ApplicationJSONStatusInfo `json:"statusInfo,omitempty"`
}

type OptCapProgramInPriceResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	OptCapProgramInPrice200ApplicationJSONObject *OptCapProgramInPrice200ApplicationJSON
}
