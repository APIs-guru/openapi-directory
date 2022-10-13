from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SearchTeamMembersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SearchTeamMembersRequest:
    request: shared.SearchTeamMembersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SearchTeamMembersSecurity = field(default=None)
    

@dataclass
class SearchTeamMembersResponse:
    content_type: str = field(default=None)
    search_team_members_response: Optional[shared.SearchTeamMembersResponse] = field(default=None)
    status_code: int = field(default=None)
    
