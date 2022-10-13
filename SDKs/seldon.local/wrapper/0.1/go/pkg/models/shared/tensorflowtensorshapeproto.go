package shared

type TensorflowTensorShapeProto struct {
	Dim         []TensorShapeProtoDim `json:"dim"`
	UnknownRank *bool                 `json:"unknown_rank"`
}
