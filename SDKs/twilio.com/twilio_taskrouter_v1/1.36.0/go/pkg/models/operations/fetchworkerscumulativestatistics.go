package operations

import (
"time"
"openapi/pkg/models/shared")
var FetchWorkersCumulativeStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkersCumulativeStatisticsPathParams struct {
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type FetchWorkersCumulativeStatisticsQueryParams struct {
    EndDate *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    Minutes *int64 `queryParam:"style=form,explode=true,name=Minutes"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    TaskChannel *string `queryParam:"style=form,explode=true,name=TaskChannel"`
    
}

type FetchWorkersCumulativeStatisticsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchWorkersCumulativeStatisticsRequest struct {
    ServerURL *string 
    PathParams FetchWorkersCumulativeStatisticsPathParams 
    QueryParams FetchWorkersCumulativeStatisticsQueryParams 
    Security FetchWorkersCumulativeStatisticsSecurity 
    
}

type FetchWorkersCumulativeStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics *shared.TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics 
    
}

