package shared

type ContactUploadResponseData struct {
	Contacts  []Contact `json:"contacts"`
	Errors    []Contact `json:"errors"`
	Inserted  *int64    `json:"inserted"`
	Submitted *int64    `json:"submitted"`
	Success   *int64    `json:"success"`
	Updated   *int64    `json:"updated"`
}

type ContactUploadResponse struct {
	Data    *ContactUploadResponseData `json:"data"`
	Success *bool                      `json:"success"`
}
