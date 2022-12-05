from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetBankAccountPathParams:
    bank_account_id: str = field(metadata={'path_param': { 'field_name': 'bank_account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBankAccountHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBankAccountSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetBankAccountRequest:
    headers: GetBankAccountHeaders = field()
    path_params: GetBankAccountPathParams = field()
    security: GetBankAccountSecurity = field()
    

@dataclass
class GetBankAccountResponse:
    content_type: str = field()
    status_code: int = field()
    get_bank_account_200_application_json_any: Optional[Any] = field(default=None)
    get_bank_account_400_application_json_any: Optional[Any] = field(default=None)
    get_bank_account_401_application_json_any: Optional[Any] = field(default=None)
    get_bank_account_403_application_json_any: Optional[Any] = field(default=None)
    get_bank_account_404_application_json_any: Optional[Any] = field(default=None)
    get_bank_account_409_application_json_any: Optional[Any] = field(default=None)
    get_bank_account_429_application_json_any: Optional[Any] = field(default=None)
    get_bank_account_500_application_json_any: Optional[Any] = field(default=None)
    
