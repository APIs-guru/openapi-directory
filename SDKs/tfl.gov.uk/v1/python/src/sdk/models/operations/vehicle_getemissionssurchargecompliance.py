from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VehicleGetEmissionsSurchargeComplianceQueryParams:
    vrm: str = field(metadata={'query_param': { 'field_name': 'vrm', 'style': 'form', 'explode': True }})
    

@dataclass
class VehicleGetEmissionsSurchargeComplianceRequest:
    query_params: VehicleGetEmissionsSurchargeComplianceQueryParams = field()
    

@dataclass
class VehicleGetEmissionsSurchargeComplianceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_vehicle_match: Optional[shared.TflAPIPresentationEntitiesVehicleMatch] = field(default=None)
    
