from dataclasses import dataclass, field
from typing import Enum,Optional

class GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatPathParams:
    x: int = field(default=None, metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: int = field(default=None, metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    format: GetMapVersionNumberCopyrightsZoomXYFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    zoom: int = field(default=None, metadata={'path_param': { 'field_name': 'zoom', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatRequest:
    path_params: GetMapVersionNumberCopyrightsZoomXYFormatPathParams = field(default=None)
    query_params: GetMapVersionNumberCopyrightsZoomXYFormatQueryParams = field(default=None)
    

@dataclass
class GetMapVersionNumberCopyrightsZoomXYFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
