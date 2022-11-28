from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PicoSettingsGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoSettingsGetRequest:
    path_params: PicoSettingsGetPathParams = field()
    

@dataclass
class PicoSettingsGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    pico_settings_dto: Optional[shared.PicoSettingsDto] = field(default=None)
    
