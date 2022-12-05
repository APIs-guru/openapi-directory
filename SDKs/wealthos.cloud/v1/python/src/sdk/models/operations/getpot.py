from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetPotPathParams:
    pot_id: str = field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPotRequest:
    headers: GetPotHeaders = field()
    path_params: GetPotPathParams = field()
    security: GetPotSecurity = field()
    

@dataclass
class GetPotResponse:
    content_type: str = field()
    status_code: int = field()
    get_pot_200_application_json_any: Optional[Any] = field(default=None)
    get_pot_401_application_json_any: Optional[Any] = field(default=None)
    get_pot_403_application_json_any: Optional[Any] = field(default=None)
    get_pot_404_application_json_any: Optional[Any] = field(default=None)
    get_pot_429_application_json_any: Optional[Any] = field(default=None)
    get_pot_500_application_json_any: Optional[Any] = field(default=None)
    
