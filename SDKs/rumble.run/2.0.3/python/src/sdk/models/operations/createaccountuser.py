from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountUserSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateAccountUserRequest:
    request: shared.UserOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountUserSecurity = field()
    

@dataclass
class CreateAccountUserResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
