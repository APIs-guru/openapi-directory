from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class UpdatePotPathParams:
    pot_id: str = field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePotHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePotSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdatePotRequest:
    headers: UpdatePotHeaders = field()
    path_params: UpdatePotPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdatePotSecurity = field()
    

@dataclass
class UpdatePotResponse:
    content_type: str = field()
    status_code: int = field()
    update_pot_200_application_json_any: Optional[Any] = field(default=None)
    update_pot_400_application_json_any: Optional[Any] = field(default=None)
    update_pot_401_application_json_any: Optional[Any] = field(default=None)
    update_pot_403_application_json_any: Optional[Any] = field(default=None)
    update_pot_404_application_json_any: Optional[Any] = field(default=None)
    update_pot_409_application_json_any: Optional[Any] = field(default=None)
    update_pot_429_application_json_any: Optional[Any] = field(default=None)
    update_pot_500_application_json_any: Optional[Any] = field(default=None)
    
