package operations

import (
"openapi/pkg/models/shared")
var ListTaskReservationServers = []string{
	"https://taskrouter.twilio.com",
}

type ListTaskReservationPathParams struct {
    TaskSid string `pathParam:"style=simple,explode=false,name=TaskSid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type ListTaskReservationQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    ReservationStatus *shared.TaskReservationEnumStatusEnum `queryParam:"style=form,explode=true,name=ReservationStatus"`
    
}

type ListTaskReservationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListTaskReservationRequest struct {
    ServerURL *string 
    PathParams ListTaskReservationPathParams 
    QueryParams ListTaskReservationQueryParams 
    Security ListTaskReservationSecurity 
    
}

type ListTaskReservationListTaskReservationResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListTaskReservationListTaskReservationResponse struct {
    Meta *ListTaskReservationListTaskReservationResponseMeta `json:"meta,omitempty"`
    Reservations []shared.TaskrouterV1WorkspaceTaskTaskReservation `json:"reservations,omitempty"`
    
}

type ListTaskReservationResponse struct {
    ContentType string 
    ListTaskReservationResponse *ListTaskReservationListTaskReservationResponse 
    StatusCode int64 
    
}

