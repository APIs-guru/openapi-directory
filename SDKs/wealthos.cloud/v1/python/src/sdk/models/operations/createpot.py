from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreatePotHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePotSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreatePotRequest:
    headers: CreatePotHeaders = field()
    security: CreatePotSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePotResponse:
    content_type: str = field()
    status_code: int = field()
    create_pot_201_application_json_any: Optional[Any] = field(default=None)
    create_pot_400_application_json_any: Optional[Any] = field(default=None)
    create_pot_401_application_json_any: Optional[Any] = field(default=None)
    create_pot_403_application_json_any: Optional[Any] = field(default=None)
    create_pot_409_application_json_any: Optional[Any] = field(default=None)
    create_pot_429_application_json_any: Optional[Any] = field(default=None)
    create_pot_500_application_json_any: Optional[Any] = field(default=None)
    
