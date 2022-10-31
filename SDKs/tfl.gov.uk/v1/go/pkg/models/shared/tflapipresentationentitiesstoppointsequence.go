package shared




type TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum string

const (
    TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnumRegular TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum = "Regular"
TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnumNight TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum = "Night"
)


type TflAPIPresentationEntitiesStopPointSequence struct {
    BranchID *int32 `json:"branchId,omitempty"`
    Direction *string `json:"direction,omitempty"`
    LineID *string `json:"lineId,omitempty"`
    LineName *string `json:"lineName,omitempty"`
    NextBranchIds []int32 `json:"nextBranchIds,omitempty"`
    PrevBranchIds []int32 `json:"prevBranchIds,omitempty"`
    ServiceType *TflAPIPresentationEntitiesStopPointSequenceServiceTypeEnum `json:"serviceType,omitempty"`
    StopPoint []TflAPIPresentationEntitiesMatchedStop `json:"stopPoint,omitempty"`
    
}

