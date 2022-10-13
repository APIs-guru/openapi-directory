from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListLoyaltyProgramsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListLoyaltyProgramsRequest:
    security: ListLoyaltyProgramsSecurity = field(default=None)
    

@dataclass
class ListLoyaltyProgramsResponse:
    content_type: str = field(default=None)
    list_loyalty_programs_response: Optional[shared.ListLoyaltyProgramsResponse] = field(default=None)
    status_code: int = field(default=None)
    
