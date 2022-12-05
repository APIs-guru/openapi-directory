from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetinvestorAccountPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetinvestorAccountHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetinvestorAccountSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetinvestorAccountRequest:
    headers: GetinvestorAccountHeaders = field()
    path_params: GetinvestorAccountPathParams = field()
    security: GetinvestorAccountSecurity = field()
    

@dataclass
class GetinvestorAccountResponse:
    content_type: str = field()
    status_code: int = field()
    getinvestor_account_200_application_json_any: Optional[Any] = field(default=None)
    getinvestor_account_400_application_json_any: Optional[Any] = field(default=None)
    getinvestor_account_401_application_json_any: Optional[Any] = field(default=None)
    getinvestor_account_403_application_json_any: Optional[Any] = field(default=None)
    getinvestor_account_404_application_json_any: Optional[Any] = field(default=None)
    getinvestor_account_409_application_json_any: Optional[Any] = field(default=None)
    getinvestor_account_429_application_json_any: Optional[Any] = field(default=None)
    getinvestor_account_500_application_json_any: Optional[Any] = field(default=None)
    
