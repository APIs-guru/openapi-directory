from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListTeamMemberWagesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    team_member_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'team_member_id', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTeamMemberWagesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListTeamMemberWagesRequest:
    query_params: ListTeamMemberWagesQueryParams = field(default=None)
    security: ListTeamMemberWagesSecurity = field(default=None)
    

@dataclass
class ListTeamMemberWagesResponse:
    content_type: str = field(default=None)
    list_team_member_wages_response: Optional[shared.ListTeamMemberWagesResponse] = field(default=None)
    status_code: int = field(default=None)
    
