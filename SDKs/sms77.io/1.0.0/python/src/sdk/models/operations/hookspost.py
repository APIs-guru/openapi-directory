from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HooksPostActionEnum(str, Enum):
    SUBSCRIBE = "subscribe"
    UNSUBSCRIBE = "unsubscribe"

class HooksPostEventTypeEnum(str, Enum):
    ALL = "all"
    SMS_MO = "sms_mo"
    DLR = "dlr"
    VOICE_STATUS = "voice_status"

class HooksPostRequestMethodEnum(str, Enum):
    POST = "POST"
    JSON = "JSON"
    GET = "GET"


@dataclass
class HooksPostQueryParams:
    action: HooksPostActionEnum = field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    event_type: Optional[HooksPostEventTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'event_type', 'style': 'form', 'explode': True }})
    id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    request_method: Optional[HooksPostRequestMethodEnum] = field(default=None, metadata={'query_param': { 'field_name': 'request_method', 'style': 'form', 'explode': True }})
    target_url: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'target_url', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class HooksPost200ApplicationJSON:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class HooksPostRequest:
    query_params: HooksPostQueryParams = field()
    

@dataclass
class HooksPostResponse:
    content_type: str = field()
    status_code: int = field()
    hooks_post_200_application_json_object: Optional[HooksPost200ApplicationJSON] = field(default=None)
    
