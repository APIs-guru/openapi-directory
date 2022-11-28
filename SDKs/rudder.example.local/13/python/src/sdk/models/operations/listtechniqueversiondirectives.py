from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListTechniqueVersionDirectivesPathParams:
    technique_name: str = field(metadata={'path_param': { 'field_name': 'techniqueName', 'style': 'simple', 'explode': False }})
    technique_version: str = field(metadata={'path_param': { 'field_name': 'techniqueVersion', 'style': 'simple', 'explode': False }})
    
class ListTechniqueVersionDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUE_DIRECTIVES = "listTechniqueDirectives"


@dataclass_json
@dataclass
class ListTechniqueVersionDirectives200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class ListTechniqueVersionDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListTechniqueVersionDirectives200ApplicationJSON:
    action: ListTechniqueVersionDirectives200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListTechniqueVersionDirectives200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListTechniqueVersionDirectives200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListTechniqueVersionDirectivesRequest:
    path_params: ListTechniqueVersionDirectivesPathParams = field()
    

@dataclass
class ListTechniqueVersionDirectivesResponse:
    content_type: str = field()
    status_code: int = field()
    list_technique_version_directives_200_application_json_object: Optional[ListTechniqueVersionDirectives200ApplicationJSON] = field(default=None)
    
