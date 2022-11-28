from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DirectiveDetailsPathParams:
    directive_id: str = field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class DirectiveDetails200ApplicationJSONActionEnum(str, Enum):
    DIRECTIVE_DETAILS = "directiveDetails"


@dataclass_json
@dataclass
class DirectiveDetails200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class DirectiveDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DirectiveDetails200ApplicationJSON:
    action: DirectiveDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DirectiveDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DirectiveDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DirectiveDetailsRequest:
    path_params: DirectiveDetailsPathParams = field()
    

@dataclass
class DirectiveDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    directive_details_200_application_json_object: Optional[DirectiveDetails200ApplicationJSON] = field(default=None)
    
