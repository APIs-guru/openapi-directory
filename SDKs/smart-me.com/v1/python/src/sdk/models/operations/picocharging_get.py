from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PicoChargingGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoChargingGetRequest:
    path_params: PicoChargingGetPathParams = field(default=None)
    

@dataclass
class PicoChargingGetResponse:
    content_type: str = field(default=None)
    pico_charging_data: Optional[shared.PicoChargingData] = field(default=None)
    status_code: int = field(default=None)
    
