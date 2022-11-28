from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams:
    format: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    max_lat: float = field(metadata={'path_param': { 'field_name': 'maxLat', 'style': 'simple', 'explode': False }})
    max_lon: float = field(metadata={'path_param': { 'field_name': 'maxLon', 'style': 'simple', 'explode': False }})
    min_lat: float = field(metadata={'path_param': { 'field_name': 'minLat', 'style': 'simple', 'explode': False }})
    min_lon: float = field(metadata={'path_param': { 'field_name': 'minLon', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest:
    path_params: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams = field()
    query_params: GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams = field()
    

@dataclass
class GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
