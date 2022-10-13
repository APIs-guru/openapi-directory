from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountUsersSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountUsersRequest:
    security: GetAccountUsersSecurity = field(default=None)
    

@dataclass
class GetAccountUsersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    users: Optional[List[shared.User]] = field(default=None)
    
