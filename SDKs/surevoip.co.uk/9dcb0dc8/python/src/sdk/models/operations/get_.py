from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetContentTypeEnum(str, Enum):
    APPLICATION_JSON = "application/json"
    TEXT_HTML = "text/html"
    TEXT_XML = "text/xml"
    APPLICATION_XML = "application/xml"

class GetHypermediaEnum(str, Enum):
    YES = "yes"
    NO = "no"


@dataclass
class GetQueryParams:
    content_type: Optional[GetContentTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'content-type', 'style': 'form', 'explode': True }})
    hypermedia: Optional[GetHypermediaEnum] = field(default=None, metadata={'query_param': { 'field_name': 'hypermedia', 'style': 'form', 'explode': True }})
    
class Get200ApplicationJSONStatusEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class Get200ApplicationJSON:
    status: Optional[Get200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class GetRequest:
    query_params: GetQueryParams = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_200_application_json_object: Optional[Get200ApplicationJSON] = field(default=None)
    
