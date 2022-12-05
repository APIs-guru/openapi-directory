from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreateBankAccountHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBankAccountSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateBankAccountRequest:
    headers: CreateBankAccountHeaders = field()
    security: CreateBankAccountSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBankAccountResponse:
    content_type: str = field()
    status_code: int = field()
    create_bank_account_201_application_json_any: Optional[Any] = field(default=None)
    create_bank_account_400_application_json_any: Optional[Any] = field(default=None)
    create_bank_account_401_application_json_any: Optional[Any] = field(default=None)
    create_bank_account_403_application_json_any: Optional[Any] = field(default=None)
    create_bank_account_404_application_json_any: Optional[Any] = field(default=None)
    create_bank_account_409_application_json_any: Optional[Any] = field(default=None)
    create_bank_account_429_application_json_any: Optional[Any] = field(default=None)
    create_bank_account_500_application_json_any: Optional[Any] = field(default=None)
    
