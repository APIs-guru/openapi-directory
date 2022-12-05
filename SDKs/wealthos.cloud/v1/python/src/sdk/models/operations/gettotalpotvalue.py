from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetTotalPotValuePathParams:
    investor_id: str = field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTotalPotValueHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTotalPotValueSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTotalPotValueRequest:
    headers: GetTotalPotValueHeaders = field()
    path_params: GetTotalPotValuePathParams = field()
    security: GetTotalPotValueSecurity = field()
    

@dataclass
class GetTotalPotValueResponse:
    content_type: str = field()
    status_code: int = field()
    get_total_pot_value_200_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_value_400_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_value_401_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_value_403_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_value_404_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_value_429_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_value_500_application_json_any: Optional[Any] = field(default=None)
    
