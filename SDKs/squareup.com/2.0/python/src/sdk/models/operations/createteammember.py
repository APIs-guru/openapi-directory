from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateTeamMemberSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTeamMemberRequest:
    request: shared.CreateTeamMemberRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateTeamMemberSecurity = field(default=None)
    

@dataclass
class CreateTeamMemberResponse:
    content_type: str = field(default=None)
    create_team_member_response: Optional[shared.CreateTeamMemberResponse] = field(default=None)
    status_code: int = field(default=None)
    
