from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PicoChargingHistoryGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoChargingHistoryGetRequest:
    path_params: PicoChargingHistoryGetPathParams = field(default=None)
    

@dataclass
class PicoChargingHistoryGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pico_charging_history_data: Optional[List[shared.PicoChargingHistoryData]] = field(default=None)
    status_code: int = field(default=None)
    
