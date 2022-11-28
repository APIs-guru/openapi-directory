from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PicoChargingGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoChargingGetRequest:
    path_params: PicoChargingGetPathParams = field()
    

@dataclass
class PicoChargingGetResponse:
    content_type: str = field()
    status_code: int = field()
    pico_charging_data: Optional[shared.PicoChargingData] = field(default=None)
    
