package shared

type VaccineStatusRequest struct {
	DepartmentID *string `json:"departmentId"`
	PatientID    string  `json:"patientId"`
	Token        *string `json:"token"`
}
