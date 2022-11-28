from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTeamsTeamIDMembershipsUserIDPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTeamsTeamIDMembershipsUserIDQueryParams:
    requester_user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'requesterUserId', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteTeamsTeamIDMembershipsUserIDRequest:
    path_params: DeleteTeamsTeamIDMembershipsUserIDPathParams = field()
    query_params: DeleteTeamsTeamIDMembershipsUserIDQueryParams = field()
    

@dataclass
class DeleteTeamsTeamIDMembershipsUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    delete_teams_team_id_memberships_user_id_200_application_json_string: Optional[str] = field(default=None)
    delete_teams_team_id_memberships_user_id_200_text_json_string: Optional[str] = field(default=None)
    delete_teams_team_id_memberships_user_id_200_text_plain_string: Optional[str] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
