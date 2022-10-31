package operations

import (
"openapi/pkg/models/shared")
var CreateReplaceItemsServers = []string{
	"https://numbers.twilio.com",
}

type CreateReplaceItemsPathParams struct {
    BundleSid string `pathParam:"style=simple,explode=false,name=BundleSid"`
    
}

type CreateReplaceItemsCreateReplaceItemsRequest struct {
    FromBundleSid string `form:"name=FromBundleSid"`
    
}

type CreateReplaceItemsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateReplaceItemsRequest struct {
    ServerURL *string 
    PathParams CreateReplaceItemsPathParams 
    Request *CreateReplaceItemsCreateReplaceItemsRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateReplaceItemsSecurity 
    
}

type CreateReplaceItemsResponse struct {
    ContentType string 
    StatusCode int64 
    NumbersV2RegulatoryComplianceBundleReplaceItems *shared.NumbersV2RegulatoryComplianceBundleReplaceItems 
    
}

