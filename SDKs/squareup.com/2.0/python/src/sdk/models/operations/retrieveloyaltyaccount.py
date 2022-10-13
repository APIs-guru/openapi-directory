from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveLoyaltyAccountPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveLoyaltyAccountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveLoyaltyAccountRequest:
    path_params: RetrieveLoyaltyAccountPathParams = field(default=None)
    security: RetrieveLoyaltyAccountSecurity = field(default=None)
    

@dataclass
class RetrieveLoyaltyAccountResponse:
    content_type: str = field(default=None)
    retrieve_loyalty_account_response: Optional[shared.RetrieveLoyaltyAccountResponse] = field(default=None)
    status_code: int = field(default=None)
    
