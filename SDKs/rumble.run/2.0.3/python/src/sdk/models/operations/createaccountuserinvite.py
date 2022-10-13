from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAccountUserInviteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateAccountUserInviteRequest:
    request: shared.UserInviteOptions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateAccountUserInviteSecurity = field(default=None)
    

@dataclass
class CreateAccountUserInviteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
