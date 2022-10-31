package operations

import (
"openapi/pkg/models/shared")
var FetchWorkflowRealTimeStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkflowRealTimeStatisticsPathParams struct {
    WorkflowSid string `pathParam:"style=simple,explode=false,name=WorkflowSid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type FetchWorkflowRealTimeStatisticsQueryParams struct {
    TaskChannel *string `queryParam:"style=form,explode=true,name=TaskChannel"`
    
}

type FetchWorkflowRealTimeStatisticsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchWorkflowRealTimeStatisticsRequest struct {
    ServerURL *string 
    PathParams FetchWorkflowRealTimeStatisticsPathParams 
    QueryParams FetchWorkflowRealTimeStatisticsQueryParams 
    Security FetchWorkflowRealTimeStatisticsSecurity 
    
}

type FetchWorkflowRealTimeStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics *shared.TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics 
    
}

