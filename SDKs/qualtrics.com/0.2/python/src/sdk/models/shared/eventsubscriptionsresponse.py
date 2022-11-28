from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventSubscriptionsResponseMeta:
    http_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

@dataclass_json
@dataclass
class EventSubscriptionsResponseResultMeta:
    http_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    

@dataclass_json
@dataclass
class EventSubscriptionsResponseResultResult:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class EventSubscriptionsResponseResult:
    meta: Optional[EventSubscriptionsResponseResultMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[EventSubscriptionsResponseResultResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class EventSubscriptionsResponse:
    meta: Optional[EventSubscriptionsResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[EventSubscriptionsResponseResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
