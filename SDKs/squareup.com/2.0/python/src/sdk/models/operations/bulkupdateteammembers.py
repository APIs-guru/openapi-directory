from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class BulkUpdateTeamMembersSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class BulkUpdateTeamMembersRequest:
    request: shared.BulkUpdateTeamMembersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: BulkUpdateTeamMembersSecurity = field(default=None)
    

@dataclass
class BulkUpdateTeamMembersResponse:
    bulk_update_team_members_response: Optional[shared.BulkUpdateTeamMembersResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
