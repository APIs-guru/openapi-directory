from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class UpdateBankAccountPathParams:
    bank_account_id: str = field(metadata={'path_param': { 'field_name': 'bank_account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBankAccountHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateBankAccountSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateBankAccountRequest:
    headers: UpdateBankAccountHeaders = field()
    path_params: UpdateBankAccountPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateBankAccountSecurity = field()
    

@dataclass
class UpdateBankAccountResponse:
    content_type: str = field()
    status_code: int = field()
    update_bank_account_201_application_json_any: Optional[Any] = field(default=None)
    update_bank_account_400_application_json_any: Optional[Any] = field(default=None)
    update_bank_account_401_application_json_any: Optional[Any] = field(default=None)
    update_bank_account_403_application_json_any: Optional[Any] = field(default=None)
    update_bank_account_404_application_json_any: Optional[Any] = field(default=None)
    update_bank_account_409_application_json_any: Optional[Any] = field(default=None)
    update_bank_account_429_application_json_any: Optional[Any] = field(default=None)
    update_bank_account_500_application_json_any: Optional[Any] = field(default=None)
    
