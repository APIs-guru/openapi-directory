from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetFleetFleetnamePathParams:
    fleetname: str = field(default=None, metadata={'path_param': { 'field_name': 'fleetname', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFleetFleetnameRequest:
    path_params: GetFleetFleetnamePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetFleetFleetname200ApplicationJSON:
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@id' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    logo_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_email' }})
    members: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    sub: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    

@dataclass
class GetFleetFleetnameResponse:
    content_type: str = field(default=None)
    get_fleet_fleetname_200_application_json_object: Optional[GetFleetFleetname200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
