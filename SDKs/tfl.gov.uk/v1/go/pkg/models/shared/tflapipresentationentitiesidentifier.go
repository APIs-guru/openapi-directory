package shared

type TflAPIPresentationEntitiesIdentifierRouteTypeEnum string

const (
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumUnknown            TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "Unknown"
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumAll                TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "All"
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumCycleSuperhighways TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "Cycle Superhighways"
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumQuietways          TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "Quietways"
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumCycleways          TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "Cycleways"
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumMiniHollands       TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "Mini-Hollands"
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumCentralLondonGrid  TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "Central London Grid"
	TflAPIPresentationEntitiesIdentifierRouteTypeEnumStreetspaceRoute   TflAPIPresentationEntitiesIdentifierRouteTypeEnum = "Streetspace Route"
)

type TflAPIPresentationEntitiesIdentifierStatusEnum string

const (
	TflAPIPresentationEntitiesIdentifierStatusEnumUnknown                                    TflAPIPresentationEntitiesIdentifierStatusEnum = "Unknown"
	TflAPIPresentationEntitiesIdentifierStatusEnumAll                                        TflAPIPresentationEntitiesIdentifierStatusEnum = "All"
	TflAPIPresentationEntitiesIdentifierStatusEnumOpen                                       TflAPIPresentationEntitiesIdentifierStatusEnum = "Open"
	TflAPIPresentationEntitiesIdentifierStatusEnumInProgress                                 TflAPIPresentationEntitiesIdentifierStatusEnum = "In Progress"
	TflAPIPresentationEntitiesIdentifierStatusEnumPlanned                                    TflAPIPresentationEntitiesIdentifierStatusEnum = "Planned"
	TflAPIPresentationEntitiesIdentifierStatusEnumPlannedSubjectToFeasibilityAndConsultation TflAPIPresentationEntitiesIdentifierStatusEnum = "Planned - Subject to feasibility and consultation."
	TflAPIPresentationEntitiesIdentifierStatusEnumNotOpen                                    TflAPIPresentationEntitiesIdentifierStatusEnum = "Not Open"
)

type TflAPIPresentationEntitiesIdentifier struct {
	Crowding  *TflAPIPresentationEntitiesCrowding                `json:"crowding"`
	FullName  *string                                            `json:"fullName"`
	ID        *string                                            `json:"id"`
	Name      *string                                            `json:"name"`
	RouteType *TflAPIPresentationEntitiesIdentifierRouteTypeEnum `json:"routeType"`
	Status    *TflAPIPresentationEntitiesIdentifierStatusEnum    `json:"status"`
	Type      *string                                            `json:"type"`
	URI       *string                                            `json:"uri"`
}
