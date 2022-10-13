from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListTechniqueVersionDirectivesPathParams:
    technique_name: str = field(default=None, metadata={'path_param': { 'field_name': 'techniqueName', 'style': 'simple', 'explode': False }})
    technique_version: str = field(default=None, metadata={'path_param': { 'field_name': 'techniqueVersion', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTechniqueVersionDirectivesRequest:
    path_params: ListTechniqueVersionDirectivesPathParams = field(default=None)
    
class ListTechniqueVersionDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUE_DIRECTIVES = "listTechniqueDirectives"


@dataclass_json
@dataclass
class ListTechniqueVersionDirectives200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class ListTechniqueVersionDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListTechniqueVersionDirectives200ApplicationJSON:
    action: ListTechniqueVersionDirectives200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListTechniqueVersionDirectives200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListTechniqueVersionDirectives200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListTechniqueVersionDirectivesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_technique_version_directives_200_application_json_object: Optional[ListTechniqueVersionDirectives200ApplicationJSON] = field(default=None)
    
