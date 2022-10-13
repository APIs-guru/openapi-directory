from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkCreateTeamMembersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkCreateTeamMembersRequest:
    request: shared.BulkCreateTeamMembersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BulkCreateTeamMembersSecurity = field(default=None)
    

@dataclass
class BulkCreateTeamMembersResponse:
    bulk_create_team_members_response: Optional[shared.BulkCreateTeamMembersResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
