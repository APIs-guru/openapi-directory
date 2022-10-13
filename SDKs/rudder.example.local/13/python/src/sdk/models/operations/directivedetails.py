from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DirectiveDetailsPathParams:
    directive_id: str = field(default=None, metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DirectiveDetailsRequest:
    path_params: DirectiveDetailsPathParams = field(default=None)
    
class DirectiveDetails200ApplicationJSONActionEnum(str, Enum):
    DIRECTIVE_DETAILS = "directiveDetails"


@dataclass_json
@dataclass
class DirectiveDetails200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class DirectiveDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DirectiveDetails200ApplicationJSON:
    action: DirectiveDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DirectiveDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: DirectiveDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DirectiveDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    directive_details_200_application_json_object: Optional[DirectiveDetails200ApplicationJSON] = field(default=None)
    
