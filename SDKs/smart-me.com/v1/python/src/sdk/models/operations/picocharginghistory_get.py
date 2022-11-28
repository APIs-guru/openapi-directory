from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PicoChargingHistoryGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoChargingHistoryGetRequest:
    path_params: PicoChargingHistoryGetPathParams = field()
    

@dataclass
class PicoChargingHistoryGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pico_charging_history_data: Optional[List[shared.PicoChargingHistoryData]] = field(default=None)
    
