package shared

type Category struct {
	FriendlyDescription *string `json:"friendlyDescription,omitempty"`
	Hidden              *bool   `json:"hidden,omitempty"`
	Icd10Description    *string `json:"icd10Description,omitempty"`
	ID                  *int64  `json:"id,omitempty"`
	Number              *int32  `json:"number,omitempty"`
}
