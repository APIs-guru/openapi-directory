package operations

type DeleteAlertPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alert_id"`
}

type DeleteAlertRequest struct {
	PathParams DeleteAlertPathParams
}

type DeleteAlertResponse struct {
	ContentType string
	StatusCode  int64
}
