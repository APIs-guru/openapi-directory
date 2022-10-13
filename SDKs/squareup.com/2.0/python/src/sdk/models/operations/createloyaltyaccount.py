from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateLoyaltyAccountSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateLoyaltyAccountRequest:
    request: shared.CreateLoyaltyAccountRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateLoyaltyAccountSecurity = field(default=None)
    

@dataclass
class CreateLoyaltyAccountResponse:
    content_type: str = field(default=None)
    create_loyalty_account_response: Optional[shared.CreateLoyaltyAccountResponse] = field(default=None)
    status_code: int = field(default=None)
    
