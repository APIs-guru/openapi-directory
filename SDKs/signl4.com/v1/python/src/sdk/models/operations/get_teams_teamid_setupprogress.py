from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeamsTeamIDSetupProgressPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsTeamIDSetupProgressRequest:
    path_params: GetTeamsTeamIDSetupProgressPathParams = field()
    

@dataclass
class GetTeamsTeamIDSetupProgressResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    team_setup_progress: Optional[shared.TeamSetupProgress] = field(default=None)
    
