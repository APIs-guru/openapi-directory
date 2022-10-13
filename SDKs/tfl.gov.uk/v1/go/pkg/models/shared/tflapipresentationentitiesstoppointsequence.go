package shared

type TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum string

const (
	TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnumRegular TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum = "Regular"
	TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnumNight   TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum = "Night"
)

type TflAPIPresentationEntitiesStopPointSequence struct {
	BranchID      *int32                                                      `json:"branchId"`
	Direction     *string                                                     `json:"direction"`
	LineID        *string                                                     `json:"lineId"`
	LineName      *string                                                     `json:"lineName"`
	NextBranchIds []int32                                                     `json:"nextBranchIds"`
	PrevBranchIds []int32                                                     `json:"prevBranchIds"`
	ServiceType   *TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum `json:"serviceType"`
	StopPoint     []TflAPIPresentationEntitiesMatchedStop                     `json:"stopPoint"`
}
