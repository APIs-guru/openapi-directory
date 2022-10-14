package shared

type VaccineStatusRequest struct {
	DepartmentID *string `json:"departmentId,omitempty"`
	PatientID    string  `json:"patientId"`
	Token        *string `json:"token,omitempty"`
}
