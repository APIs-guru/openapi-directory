from dataclasses import dataclass, field
from typing import Enum,Optional

class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams:
    format: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    max_lat: float = field(default=None, metadata={'path_param': { 'field_name': 'maxLat', 'style': 'simple', 'explode': False }})
    max_lon: float = field(default=None, metadata={'path_param': { 'field_name': 'maxLon', 'style': 'simple', 'explode': False }})
    min_lat: float = field(default=None, metadata={'path_param': { 'field_name': 'minLat', 'style': 'simple', 'explode': False }})
    min_lon: float = field(default=None, metadata={'path_param': { 'field_name': 'minLon', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest:
    path_params: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams = field(default=None)
    query_params: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams = field(default=None)
    

@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
