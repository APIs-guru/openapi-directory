from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GetAdminScenarios200ApplicationJSONScenarios:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    possible_states: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('possibleStates') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class GetAdminScenarios200ApplicationJSON:
    scenarios: Optional[List[GetAdminScenarios200ApplicationJSONScenarios]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scenarios') }})
    

@dataclass
class GetAdminScenariosResponse:
    content_type: str = field()
    status_code: int = field()
    get_admin_scenarios_200_application_json_object: Optional[GetAdminScenarios200ApplicationJSON] = field(default=None)
    
