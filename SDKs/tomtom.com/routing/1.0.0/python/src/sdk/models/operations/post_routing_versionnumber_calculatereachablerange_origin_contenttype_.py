from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams:
    content_type: shared.ContentTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'contentType', 'style': 'simple', 'explode': False }})
    origin: str = field(default=None, metadata={'path_param': { 'field_name': 'origin', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum(str, Enum):
    COMBUSTION = "combustion"
    ELECTRIC = "electric"


@dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams:
    acceleration_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'accelerationEfficiency', 'style': 'form', 'explode': True }})
    arrive_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arriveAt', 'style': 'form', 'explode': True }})
    auxiliary_power_in_liters_per_hour: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'auxiliaryPowerInLitersPerHour', 'style': 'form', 'explode': True }})
    avoid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'avoid', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    constant_speed_consumption_in_liters_per_hundredkm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'constantSpeedConsumptionInLitersPerHundredkm', 'style': 'form', 'explode': True }})
    constant_speed_consumption_ink_wh_per_hundredkm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'constantSpeedConsumptionInkWhPerHundredkm', 'style': 'form', 'explode': True }})
    current_fuel_in_liters: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'currentFuelInLiters', 'style': 'form', 'explode': True }})
    deceleration_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'decelerationEfficiency', 'style': 'form', 'explode': True }})
    depart_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'departAt', 'style': 'form', 'explode': True }})
    downhill_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'downhillEfficiency', 'style': 'form', 'explode': True }})
    energy_budget_ink_wh: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'energyBudgetInkWh', 'style': 'form', 'explode': True }})
    fuel_budget_in_liters: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'fuelBudgetInLiters', 'style': 'form', 'explode': True }})
    fuel_energy_density_in_m_joules_per_liter: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'fuelEnergyDensityInMJoulesPerLiter', 'style': 'form', 'explode': True }})
    hilliness: Optional[shared.HillinessEnum] = field(default=None, metadata={'query_param': { 'field_name': 'hilliness', 'style': 'form', 'explode': True }})
    report: Optional[shared.ReportEnum] = field(default=None, metadata={'query_param': { 'field_name': 'report', 'style': 'form', 'explode': True }})
    route_type: Optional[shared.RouteTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'routeType', 'style': 'form', 'explode': True }})
    time_budget_in_sec: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timeBudgetInSec', 'style': 'form', 'explode': True }})
    traffic: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'traffic', 'style': 'form', 'explode': True }})
    travel_mode: Optional[shared.TravelModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'travelMode', 'style': 'form', 'explode': True }})
    uphill_efficiency: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'uphillEfficiency', 'style': 'form', 'explode': True }})
    vehicle_axle_weight: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleAxleWeight', 'style': 'form', 'explode': True }})
    vehicle_commercial: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleCommercial', 'style': 'form', 'explode': True }})
    vehicle_engine_type: Optional[PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleEngineType', 'style': 'form', 'explode': True }})
    vehicle_height: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleHeight', 'style': 'form', 'explode': True }})
    vehicle_length: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleLength', 'style': 'form', 'explode': True }})
    vehicle_load_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleLoadType', 'style': 'form', 'explode': True }})
    vehicle_max_speed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleMaxSpeed', 'style': 'form', 'explode': True }})
    vehicle_weight: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleWeight', 'style': 'form', 'explode': True }})
    vehicle_width: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'vehicleWidth', 'style': 'form', 'explode': True }})
    windingness: Optional[shared.WindingnessEnum] = field(default=None, metadata={'query_param': { 'field_name': 'windingness', 'style': 'form', 'explode': True }})
    

@dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    calculate_reachable_range_post_data_parameters: Optional[shared.CalculateReachableRangePostDataParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest:
    path_params: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams = field(default=None)
    query_params: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams = field(default=None)
    request: Optional[PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests] = field(default=None)
    

@dataclass
class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
