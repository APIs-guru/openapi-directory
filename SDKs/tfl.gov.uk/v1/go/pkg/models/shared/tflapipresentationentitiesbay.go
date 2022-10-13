package shared

type TflAPIPresentationEntitiesBay struct {
	BayCount *int32  `json:"bayCount"`
	BayType  *string `json:"bayType"`
	Free     *int32  `json:"free"`
	Occupied *int32  `json:"occupied"`
}
