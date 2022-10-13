from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VehicleGetUlezComplianceQueryParams:
    vrm: str = field(default=None, metadata={'query_param': { 'field_name': 'vrm', 'style': 'form', 'explode': True }})
    

@dataclass
class VehicleGetUlezComplianceRequest:
    query_params: VehicleGetUlezComplianceQueryParams = field(default=None)
    

@dataclass
class VehicleGetUlezComplianceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tfl_api_presentation_entities_vehicle_match: Optional[shared.TflAPIPresentationEntitiesVehicleMatch] = field(default=None)
    
