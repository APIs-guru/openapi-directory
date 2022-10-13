from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListTechniquesDirectivesPathParams:
    technique_name: str = field(default=None, metadata={'path_param': { 'field_name': 'techniqueName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTechniquesDirectivesRequest:
    path_params: ListTechniquesDirectivesPathParams = field(default=None)
    
class ListTechniquesDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUES_DIRECTIVES = "listTechniquesDirectives"


@dataclass_json
@dataclass
class ListTechniquesDirectives200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class ListTechniquesDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListTechniquesDirectives200ApplicationJSON:
    action: ListTechniquesDirectives200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListTechniquesDirectives200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListTechniquesDirectives200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListTechniquesDirectivesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_techniques_directives_200_application_json_object: Optional[ListTechniquesDirectives200ApplicationJSON] = field(default=None)
    
