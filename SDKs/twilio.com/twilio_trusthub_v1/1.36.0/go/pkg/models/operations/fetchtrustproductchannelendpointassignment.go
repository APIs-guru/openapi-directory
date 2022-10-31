package operations

import (
"openapi/pkg/models/shared")
var FetchTrustProductChannelEndpointAssignmentServers = []string{
	"https://trusthub.twilio.com",
}

type FetchTrustProductChannelEndpointAssignmentPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    TrustProductSid string `pathParam:"style=simple,explode=false,name=TrustProductSid"`
    
}

type FetchTrustProductChannelEndpointAssignmentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchTrustProductChannelEndpointAssignmentRequest struct {
    ServerURL *string 
    PathParams FetchTrustProductChannelEndpointAssignmentPathParams 
    Security FetchTrustProductChannelEndpointAssignmentSecurity 
    
}

type FetchTrustProductChannelEndpointAssignmentResponse struct {
    ContentType string 
    StatusCode int64 
    TrusthubV1TrustProductTrustProductChannelEndpointAssignment *shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment 
    
}

