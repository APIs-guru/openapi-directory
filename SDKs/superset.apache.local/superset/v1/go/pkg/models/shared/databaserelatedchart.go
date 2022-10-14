package shared

type DatabaseRelatedChart struct {
	ID        *int32  `json:"id,omitempty"`
	SliceName *string `json:"slice_name,omitempty"`
	VizType   *string `json:"viz_type,omitempty"`
}
