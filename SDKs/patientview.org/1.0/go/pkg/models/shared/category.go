package shared

type Category struct {
	FriendlyDescription *string `json:"friendlyDescription"`
	Hidden              *bool   `json:"hidden"`
	Icd10Description    *string `json:"icd10Description"`
	ID                  *int64  `json:"id"`
	Number              *int32  `json:"number"`
}
