package shared

type DatasetRelatedChart struct {
	ID        *int32  `json:"id"`
	SliceName *string `json:"slice_name"`
	VizType   *string `json:"viz_type"`
}
