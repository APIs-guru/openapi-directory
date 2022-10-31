package operations

import (
	"openapi/pkg/models/shared"
)

type PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams struct {
	ContentType   shared.ContentTypeEnum `pathParam:"style=simple,explode=false,name=contentType"`
	Origin        string                 `pathParam:"style=simple,explode=false,name=origin"`
	VersionNumber int64                  `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum string

const (
	PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnumCombustion PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum = "combustion"
	PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnumElectric   PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum = "electric"
)

type PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams struct {
	AccelerationEfficiency                       *float32                                                                               `queryParam:"style=form,explode=true,name=accelerationEfficiency"`
	ArriveAt                                     *string                                                                                `queryParam:"style=form,explode=true,name=arriveAt"`
	AuxiliaryPowerInLitersPerHour                *float32                                                                               `queryParam:"style=form,explode=true,name=auxiliaryPowerInLitersPerHour"`
	Avoid                                        *string                                                                                `queryParam:"style=form,explode=true,name=avoid"`
	Callback                                     *string                                                                                `queryParam:"style=form,explode=true,name=callback"`
	ConstantSpeedConsumptionInLitersPerHundredkm *string                                                                                `queryParam:"style=form,explode=true,name=constantSpeedConsumptionInLitersPerHundredkm"`
	ConstantSpeedConsumptionInkWhPerHundredkm    *string                                                                                `queryParam:"style=form,explode=true,name=constantSpeedConsumptionInkWhPerHundredkm"`
	CurrentFuelInLiters                          *float32                                                                               `queryParam:"style=form,explode=true,name=currentFuelInLiters"`
	DecelerationEfficiency                       *float32                                                                               `queryParam:"style=form,explode=true,name=decelerationEfficiency"`
	DepartAt                                     *string                                                                                `queryParam:"style=form,explode=true,name=departAt"`
	DownhillEfficiency                           *float32                                                                               `queryParam:"style=form,explode=true,name=downhillEfficiency"`
	EnergyBudgetInkWh                            *float32                                                                               `queryParam:"style=form,explode=true,name=energyBudgetInkWh"`
	FuelBudgetInLiters                           *float32                                                                               `queryParam:"style=form,explode=true,name=fuelBudgetInLiters"`
	FuelEnergyDensityInMJoulesPerLiter           *float32                                                                               `queryParam:"style=form,explode=true,name=fuelEnergyDensityInMJoulesPerLiter"`
	Hilliness                                    *shared.HillinessEnum                                                                  `queryParam:"style=form,explode=true,name=hilliness"`
	Report                                       *shared.ReportEnum                                                                     `queryParam:"style=form,explode=true,name=report"`
	RouteType                                    *shared.RouteTypeEnum                                                                  `queryParam:"style=form,explode=true,name=routeType"`
	TimeBudgetInSec                              *float32                                                                               `queryParam:"style=form,explode=true,name=timeBudgetInSec"`
	Traffic                                      *bool                                                                                  `queryParam:"style=form,explode=true,name=traffic"`
	TravelMode                                   *shared.TravelModeEnum                                                                 `queryParam:"style=form,explode=true,name=travelMode"`
	UphillEfficiency                             *float32                                                                               `queryParam:"style=form,explode=true,name=uphillEfficiency"`
	VehicleAxleWeight                            *int64                                                                                 `queryParam:"style=form,explode=true,name=vehicleAxleWeight"`
	VehicleCommercial                            *bool                                                                                  `queryParam:"style=form,explode=true,name=vehicleCommercial"`
	VehicleEngineType                            *PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum `queryParam:"style=form,explode=true,name=vehicleEngineType"`
	VehicleHeight                                *float32                                                                               `queryParam:"style=form,explode=true,name=vehicleHeight"`
	VehicleLength                                *float32                                                                               `queryParam:"style=form,explode=true,name=vehicleLength"`
	VehicleLoadType                              *string                                                                                `queryParam:"style=form,explode=true,name=vehicleLoadType"`
	VehicleMaxSpeed                              *int64                                                                                 `queryParam:"style=form,explode=true,name=vehicleMaxSpeed"`
	VehicleWeight                                *int64                                                                                 `queryParam:"style=form,explode=true,name=vehicleWeight"`
	VehicleWidth                                 *float32                                                                               `queryParam:"style=form,explode=true,name=vehicleWidth"`
	Windingness                                  *shared.WindingnessEnum                                                                `queryParam:"style=form,explode=true,name=windingness"`
}

type PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests struct {
	ApplicationXML                            []byte                                            `request:"mediaType=application/xml"`
	CalculateReachableRangePostDataParameters *shared.CalculateReachableRangePostDataParameters `request:"mediaType=application/json"`
}

type PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest struct {
	PathParams  PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams
	QueryParams PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams
	Request     *PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests
}

type PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse struct {
	ContentType string
	StatusCode  int64
}
