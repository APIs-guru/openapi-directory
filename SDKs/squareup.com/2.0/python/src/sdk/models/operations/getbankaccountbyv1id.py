from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBankAccountByV1IDPathParams:
    v1_bank_account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'v1_bank_account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBankAccountByV1IDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetBankAccountByV1IDRequest:
    path_params: GetBankAccountByV1IDPathParams = field(default=None)
    security: GetBankAccountByV1IDSecurity = field(default=None)
    

@dataclass
class GetBankAccountByV1IDResponse:
    content_type: str = field(default=None)
    get_bank_account_by_v1_id_response: Optional[shared.GetBankAccountByV1IDResponse] = field(default=None)
    status_code: int = field(default=None)
    
