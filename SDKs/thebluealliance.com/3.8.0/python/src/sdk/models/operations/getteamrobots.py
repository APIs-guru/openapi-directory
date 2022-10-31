from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetTeamRobotsPathParams:
    team_key: str = field(default=None, metadata={'path_param': { 'field_name': 'team_key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamRobotsHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamRobotsSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamRobotsRequest:
    path_params: GetTeamRobotsPathParams = field(default=None)
    headers: GetTeamRobotsHeaders = field(default=None)
    security: GetTeamRobotsSecurity = field(default=None)
    

@dataclass
class GetTeamRobotsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    team_robots: Optional[List[shared.TeamRobot]] = field(default=None)
    
