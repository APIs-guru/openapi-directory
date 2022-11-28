from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OccupancyGetChargeConnectorStatusPathParams:
    ids: List[str] = field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class OccupancyGetChargeConnectorStatusRequest:
    path_params: OccupancyGetChargeConnectorStatusPathParams = field()
    

@dataclass
class OccupancyGetChargeConnectorStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tfl_api_presentation_entities_charge_connector_occupancies: Optional[List[shared.TflAPIPresentationEntitiesChargeConnectorOccupancy]] = field(default=None)
    
