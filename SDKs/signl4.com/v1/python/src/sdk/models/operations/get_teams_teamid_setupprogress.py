from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDSetupProgressPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDSetupProgressRequest:
    path_params: GetTeamsTeamIDSetupProgressPathParams = field(default=None)
    

@dataclass
class GetTeamsTeamIDSetupProgressResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    team_setup_progress: Optional[shared.TeamSetupProgress] = field(default=None)
    
