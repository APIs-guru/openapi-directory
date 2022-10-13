package shared

type AnsweringBody struct {
	Department *GovernmentDepartment `json:"department"`
	ID         *int32                `json:"id"`
	Name       *string               `json:"name"`
	ShortName  *string               `json:"shortName"`
	Target     *string               `json:"target"`
}
