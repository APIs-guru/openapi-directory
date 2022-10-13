from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchLoyaltyAccountsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchLoyaltyAccountsRequest:
    request: shared.SearchLoyaltyAccountsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchLoyaltyAccountsSecurity = field(default=None)
    

@dataclass
class SearchLoyaltyAccountsResponse:
    content_type: str = field(default=None)
    search_loyalty_accounts_response: Optional[shared.SearchLoyaltyAccountsResponse] = field(default=None)
    status_code: int = field(default=None)
    
