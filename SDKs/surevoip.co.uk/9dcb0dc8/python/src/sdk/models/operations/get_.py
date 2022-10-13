from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    

@dataclass
class GetRequest:
    query_params: GetQueryParams = field(default=None)
    
class Get200ApplicationJSONStatusEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class Get200ApplicationJSON:
    status: Optional[Get200ApplicationJSONStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass
class GetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_200_application_json_object: Optional[Get200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
