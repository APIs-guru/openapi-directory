from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetTeamTeamnamePathParams:
    teamname: str = field(metadata={'path_param': { 'field_name': 'teamname', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetTeamTeamname200ApplicationJSON:
    sub: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    logo_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_email') }})
    members: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    

@dataclass
class GetTeamTeamnameRequest:
    path_params: GetTeamTeamnamePathParams = field()
    

@dataclass
class GetTeamTeamnameResponse:
    content_type: str = field()
    status_code: int = field()
    get_team_teamname_200_application_json_object: Optional[GetTeamTeamname200ApplicationJSON] = field(default=None)
    
