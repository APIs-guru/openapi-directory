from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PicoSettingsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoSettingsGetRequest:
    path_params: PicoSettingsGetPathParams = field(default=None)
    

@dataclass
class PicoSettingsGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    pico_settings_dto: Optional[shared.PicoSettingsDto] = field(default=None)
    status_code: int = field(default=None)
    
