package shared

type Sentence struct {
	Book     *Book   `json:"book"`
	ID       *string `json:"id"`
	Sentence *string `json:"sentence"`
}
