package shared

type AnsweringBody struct {
	Department *GovernmentDepartment `json:"department,omitempty"`
	ID         *int32                `json:"id,omitempty"`
	Name       *string               `json:"name,omitempty"`
	ShortName  *string               `json:"shortName,omitempty"`
	Target     *string               `json:"target,omitempty"`
}
