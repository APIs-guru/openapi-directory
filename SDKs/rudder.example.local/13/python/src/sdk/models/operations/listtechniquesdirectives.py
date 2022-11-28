from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListTechniquesDirectivesPathParams:
    technique_name: str = field(metadata={'path_param': { 'field_name': 'techniqueName', 'style': 'simple', 'explode': False }})
    
class ListTechniquesDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUES_DIRECTIVES = "listTechniquesDirectives"


@dataclass_json
@dataclass
class ListTechniquesDirectives200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class ListTechniquesDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListTechniquesDirectives200ApplicationJSON:
    action: ListTechniquesDirectives200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListTechniquesDirectives200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListTechniquesDirectives200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListTechniquesDirectivesRequest:
    path_params: ListTechniquesDirectivesPathParams = field()
    

@dataclass
class ListTechniquesDirectivesResponse:
    content_type: str = field()
    status_code: int = field()
    list_techniques_directives_200_application_json_object: Optional[ListTechniquesDirectives200ApplicationJSON] = field(default=None)
    
