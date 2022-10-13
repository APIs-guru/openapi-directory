from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBankAccountPathParams:
    bank_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'bank_account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBankAccountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetBankAccountRequest:
    path_params: GetBankAccountPathParams = field(default=None)
    security: GetBankAccountSecurity = field(default=None)
    

@dataclass
class GetBankAccountResponse:
    content_type: str = field(default=None)
    get_bank_account_response: Optional[shared.GetBankAccountResponse] = field(default=None)
    status_code: int = field(default=None)
    
