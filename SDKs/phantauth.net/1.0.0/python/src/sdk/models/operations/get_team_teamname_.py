from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetTeamTeamnamePathParams:
    teamname: str = field(default=None, metadata={'path_param': { 'field_name': 'teamname', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamTeamnameRequest:
    path_params: GetTeamTeamnamePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTeamTeamname200ApplicationJSON:
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@id' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    logo_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_email' }})
    members: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    sub: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    

@dataclass
class GetTeamTeamnameResponse:
    content_type: str = field(default=None)
    get_team_teamname_200_application_json_object: Optional[GetTeamTeamname200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
