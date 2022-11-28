from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountUserInviteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateAccountUserInviteRequest:
    request: shared.UserInviteOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountUserInviteSecurity = field()
    

@dataclass
class CreateAccountUserInviteResponse:
    content_type: str = field()
    status_code: int = field()
    user: Optional[shared.User] = field(default=None)
    
