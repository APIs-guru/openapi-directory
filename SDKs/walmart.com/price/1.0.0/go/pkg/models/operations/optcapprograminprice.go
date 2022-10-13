package operations

type OptCapProgramInPriceHeaders struct {
	Authorization         string  `header:"name=Authorization"`
	WmConsumerChannelType *string `header:"name=WM_CONSUMER.CHANNEL.TYPE"`
	WmQosCorrelationID    string  `header:"name=WM_QOS.CORRELATION_ID"`
	WmSecAccessToken      string  `header:"name=WM_SEC.ACCESS_TOKEN"`
	WmSvcName             string  `header:"name=WM_SVC.NAME"`
}

type OptCapProgramInPriceRequestBody struct {
	SubsidyEnrolled   *bool `json:"subsidyEnrolled"`
	SubsidyPreference *bool `json:"subsidyPreference"`
}

type OptCapProgramInPriceRequest struct {
	Headers OptCapProgramInPriceHeaders
	Request OptCapProgramInPriceRequestBody `request:"mediaType=application/json"`
}

type OptCapProgramInPrice200ApplicationJSONStatusInfo struct {
	SubsidyEnrolled   *bool `json:"subsidyEnrolled"`
	SubsidyPreference *bool `json:"subsidyPreference"`
}

type OptCapProgramInPrice200ApplicationJSON struct {
	MartID     *string                                           `json:"martId"`
	StatusInfo *OptCapProgramInPrice200ApplicationJSONStatusInfo `json:"statusInfo"`
}

type OptCapProgramInPriceResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	OptCapProgramInPrice200ApplicationJSONObject *OptCapProgramInPrice200ApplicationJSON
}
