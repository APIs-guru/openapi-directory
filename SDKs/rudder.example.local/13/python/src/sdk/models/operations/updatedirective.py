from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateDirectivePathParams:
    directive_id: str = field(metadata={'path_param': { 'field_name': 'directiveId', 'style': 'simple', 'explode': False }})
    
class UpdateDirective200ApplicationJSONActionEnum(str, Enum):
    UPDATE_DIRECTIVE = "updateDirective"


@dataclass_json
@dataclass
class UpdateDirective200ApplicationJSONData:
    directives: List[shared.Directive] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('directives') }})
    
class UpdateDirective200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateDirective200ApplicationJSON:
    action: UpdateDirective200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateDirective200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateDirective200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateDirectiveRequest:
    path_params: UpdateDirectivePathParams = field()
    request: shared.Directive = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDirectiveResponse:
    content_type: str = field()
    status_code: int = field()
    update_directive_200_application_json_object: Optional[UpdateDirective200ApplicationJSON] = field(default=None)
    
