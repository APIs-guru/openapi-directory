from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetSwitchPathParams:
    switch_transaction_id: str = field(metadata={'path_param': { 'field_name': 'switch_transaction_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSwitchQueryParams:
    include_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_details', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSwitchHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSwitchSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSwitchRequest:
    headers: GetSwitchHeaders = field()
    path_params: GetSwitchPathParams = field()
    query_params: GetSwitchQueryParams = field()
    security: GetSwitchSecurity = field()
    

@dataclass
class GetSwitchResponse:
    content_type: str = field()
    status_code: int = field()
    get_switch_200_application_json_any: Optional[Any] = field(default=None)
    get_switch_400_application_json_any: Optional[Any] = field(default=None)
    get_switch_401_application_json_any: Optional[Any] = field(default=None)
    get_switch_403_application_json_any: Optional[Any] = field(default=None)
    get_switch_404_application_json_any: Optional[Any] = field(default=None)
    get_switch_409_application_json_any: Optional[Any] = field(default=None)
    get_switch_429_application_json_any: Optional[Any] = field(default=None)
    get_switch_500_application_json_any: Optional[Any] = field(default=None)
    
