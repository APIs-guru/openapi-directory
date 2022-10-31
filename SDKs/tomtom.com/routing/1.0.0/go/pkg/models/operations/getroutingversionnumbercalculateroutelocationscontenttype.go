package operations

import (
	"openapi/pkg/models/shared"
)

type GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams struct {
	ContentType   shared.ContentTypeEnum `pathParam:"style=simple,explode=false,name=contentType"`
	Locations     string                 `pathParam:"style=simple,explode=false,name=locations"`
	VersionNumber int64                  `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams struct {
	AccelerationEfficiency                       *float32                         `queryParam:"style=form,explode=true,name=accelerationEfficiency"`
	AlternativeType                              *shared.AlternativeTypeEnum      `queryParam:"style=form,explode=true,name=alternativeType"`
	ArriveAt                                     *string                          `queryParam:"style=form,explode=true,name=arriveAt"`
	AuxiliaryPowerInLitersPerHour                *float32                         `queryParam:"style=form,explode=true,name=auxiliaryPowerInLitersPerHour"`
	Avoid                                        *string                          `queryParam:"style=form,explode=true,name=avoid"`
	Callback                                     *string                          `queryParam:"style=form,explode=true,name=callback"`
	ComputeBestOrder                             *bool                            `queryParam:"style=form,explode=true,name=computeBestOrder"`
	ComputeTravelTimeFor                         *shared.ComputeTravelTimeForEnum `queryParam:"style=form,explode=true,name=computeTravelTimeFor"`
	ConstantSpeedConsumptionInLitersPerHundredkm *string                          `queryParam:"style=form,explode=true,name=constantSpeedConsumptionInLitersPerHundredkm"`
	ConstantSpeedConsumptionInkWhPerHundredkm    *string                          `queryParam:"style=form,explode=true,name=constantSpeedConsumptionInkWhPerHundredkm"`
	CurrentFuelInLiters                          *float32                         `queryParam:"style=form,explode=true,name=currentFuelInLiters"`
	DecelerationEfficiency                       *float32                         `queryParam:"style=form,explode=true,name=decelerationEfficiency"`
	DepartAt                                     *string                          `queryParam:"style=form,explode=true,name=departAt"`
	DownhillEfficiency                           *float32                         `queryParam:"style=form,explode=true,name=downhillEfficiency"`
	FuelEnergyDensityInMJoulesPerLiter           *float32                         `queryParam:"style=form,explode=true,name=fuelEnergyDensityInMJoulesPerLiter"`
	Hilliness                                    *shared.HillinessEnum            `queryParam:"style=form,explode=true,name=hilliness"`
	InstructionsType                             *shared.InstructionsTypeEnum     `queryParam:"style=form,explode=true,name=instructionsType"`
	Language                                     *string                          `queryParam:"style=form,explode=true,name=language"`
	MaxAlternatives                              *int64                           `queryParam:"style=form,explode=true,name=maxAlternatives"`
	MinDeviationDistance                         *int64                           `queryParam:"style=form,explode=true,name=minDeviationDistance"`
	MinDeviationTime                             *int64                           `queryParam:"style=form,explode=true,name=minDeviationTime"`
	Report                                       *shared.ReportEnum               `queryParam:"style=form,explode=true,name=report"`
	RouteRepresentation                          *shared.RouteRepresentationEnum  `queryParam:"style=form,explode=true,name=routeRepresentation"`
	RouteType                                    *shared.RouteTypeEnum            `queryParam:"style=form,explode=true,name=routeType"`
	SectionType                                  *string                          `queryParam:"style=form,explode=true,name=sectionType"`
	Traffic                                      *bool                            `queryParam:"style=form,explode=true,name=traffic"`
	TravelMode                                   *shared.TravelModeEnum           `queryParam:"style=form,explode=true,name=travelMode"`
	UphillEfficiency                             *float32                         `queryParam:"style=form,explode=true,name=uphillEfficiency"`
	VehicleAxleWeight                            *int64                           `queryParam:"style=form,explode=true,name=vehicleAxleWeight"`
	VehicleCommercial                            *bool                            `queryParam:"style=form,explode=true,name=vehicleCommercial"`
	VehicleEngineType                            *shared.VehicleEngineTypeEnum    `queryParam:"style=form,explode=true,name=vehicleEngineType"`
	VehicleHeading                               *int64                           `queryParam:"style=form,explode=true,name=vehicleHeading"`
	VehicleHeight                                *float32                         `queryParam:"style=form,explode=true,name=vehicleHeight"`
	VehicleLength                                *float32                         `queryParam:"style=form,explode=true,name=vehicleLength"`
	VehicleLoadType                              *string                          `queryParam:"style=form,explode=true,name=vehicleLoadType"`
	VehicleMaxSpeed                              *int64                           `queryParam:"style=form,explode=true,name=vehicleMaxSpeed"`
	VehicleWeight                                *int64                           `queryParam:"style=form,explode=true,name=vehicleWeight"`
	VehicleWidth                                 *float32                         `queryParam:"style=form,explode=true,name=vehicleWidth"`
	Windingness                                  *shared.WindingnessEnum          `queryParam:"style=form,explode=true,name=windingness"`
}

type GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest struct {
	PathParams  GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams
	QueryParams GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams
}

type GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse struct {
	ContentType string
	StatusCode  int64
}
