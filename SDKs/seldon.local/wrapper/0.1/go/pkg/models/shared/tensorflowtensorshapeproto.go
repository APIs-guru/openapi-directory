package shared

type TensorflowTensorShapeProto struct {
	Dim         []TensorShapeProtoDim `json:"dim,omitempty"`
	UnknownRank *bool                 `json:"unknown_rank,omitempty"`
}
