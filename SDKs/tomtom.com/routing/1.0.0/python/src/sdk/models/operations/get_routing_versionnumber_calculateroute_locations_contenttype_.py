from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams:
    content_type: shared.ContentTypeEnum = field(metadata={'path_param': { 'field_name': 'contentType', 'style': 'simple', 'explode': False }})
    locations: str = field(metadata={'path_param': { 'field_name': 'locations', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams:
    acceleration_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'accelerationEfficiency', 'style': 'form', 'explode': True }})
    alternative_type: Optional[shared.AlternativeTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'alternativeType', 'style': 'form', 'explode': True }})
    arrive_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arriveAt', 'style': 'form', 'explode': True }})
    auxiliary_power_in_liters_per_hour: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'auxiliaryPowerInLitersPerHour', 'style': 'form', 'explode': True }})
    avoid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'avoid', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    compute_best_order: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'computeBestOrder', 'style': 'form', 'explode': True }})
    compute_travel_time_for: Optional[shared.ComputeTravelTimeForEnum] = field(default=None, metadata={'query_param': { 'field_name': 'computeTravelTimeFor', 'style': 'form', 'explode': True }})
    constant_speed_consumption_in_liters_per_hundredkm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'constantSpeedConsumptionInLitersPerHundredkm', 'style': 'form', 'explode': True }})
    constant_speed_consumption_ink_wh_per_hundredkm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'constantSpeedConsumptionInkWhPerHundredkm', 'style': 'form', 'explode': True }})
    current_fuel_in_liters: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'currentFuelInLiters', 'style': 'form', 'explode': True }})
    deceleration_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'decelerationEfficiency', 'style': 'form', 'explode': True }})
    depart_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'departAt', 'style': 'form', 'explode': True }})
    downhill_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'downhillEfficiency', 'style': 'form', 'explode': True }})
    fuel_energy_density_in_m_joules_per_liter: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'fuelEnergyDensityInMJoulesPerLiter', 'style': 'form', 'explode': True }})
    hilliness: Optional[shared.HillinessEnum] = field(default=None, metadata={'query_param': { 'field_name': 'hilliness', 'style': 'form', 'explode': True }})
    instructions_type: Optional[shared.InstructionsTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'instructionsType', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    max_alternatives: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxAlternatives', 'style': 'form', 'explode': True }})
    min_deviation_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDeviationDistance', 'style': 'form', 'explode': True }})
    min_deviation_time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minDeviationTime', 'style': 'form', 'explode': True }})
    report: Optional[shared.ReportEnum] = field(default=None, metadata={'query_param': { 'field_name': 'report', 'style': 'form', 'explode': True }})
    route_representation: Optional[shared.RouteRepresentationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'routeRepresentation', 'style': 'form', 'explode': True }})
    route_type: Optional[shared.RouteTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'routeType', 'style': 'form', 'explode': True }})
    section_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sectionType', 'style': 'form', 'explode': True }})
    traffic: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'traffic', 'style': 'form', 'explode': True }})
    travel_mode: Optional[shared.TravelModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'travelMode', 'style': 'form', 'explode': True }})
    uphill_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'uphillEfficiency', 'style': 'form', 'explode': True }})
    vehicle_axle_weight: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleAxleWeight', 'style': 'form', 'explode': True }})
    vehicle_commercial: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleCommercial', 'style': 'form', 'explode': True }})
    vehicle_engine_type: Optional[shared.VehicleEngineTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleEngineType', 'style': 'form', 'explode': True }})
    vehicle_heading: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleHeading', 'style': 'form', 'explode': True }})
    vehicle_height: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleHeight', 'style': 'form', 'explode': True }})
    vehicle_length: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleLength', 'style': 'form', 'explode': True }})
    vehicle_load_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleLoadType', 'style': 'form', 'explode': True }})
    vehicle_max_speed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleMaxSpeed', 'style': 'form', 'explode': True }})
    vehicle_weight: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleWeight', 'style': 'form', 'explode': True }})
    vehicle_width: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleWidth', 'style': 'form', 'explode': True }})
    windingness: Optional[shared.WindingnessEnum] = field(default=None, metadata={'query_param': { 'field_name': 'windingness', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest:
    path_params: GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams = field()
    query_params: GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams = field()
    

@dataclass
class GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse:
    content_type: str = field()
    status_code: int = field()
    
