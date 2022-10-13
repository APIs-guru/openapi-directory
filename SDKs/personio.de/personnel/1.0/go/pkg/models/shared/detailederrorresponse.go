package shared

type DetailedErrorResponseErrorDetailedMessage struct {
	Break     *int64  `json:"break"`
	Comment   *string `json:"comment"`
	Date      *string `json:"date"`
	Employee  *int64  `json:"employee"`
	EndTime   *string `json:"end_time"`
	ErrorMsg  *string `json:"error_msg"`
	ID        *int64  `json:"id"`
	StartTime *string `json:"start_time"`
	Success   *bool   `json:"success"`
}

type DetailedErrorResponseError struct {
	Code            *int64                                      `json:"code"`
	DetailedMessage []DetailedErrorResponseErrorDetailedMessage `json:"detailed_message"`
	Message         *string                                     `json:"message"`
}

type DetailedErrorResponse struct {
	Error   DetailedErrorResponseError `json:"error"`
	Success bool                       `json:"success"`
}
