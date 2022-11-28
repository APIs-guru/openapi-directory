from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetMapVersionNumberCopyrightsCaptionFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatPathParams:
    format: GetMapVersionNumberCopyrightsCaptionFormatFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatRequest:
    path_params: GetMapVersionNumberCopyrightsCaptionFormatPathParams = field()
    query_params: GetMapVersionNumberCopyrightsCaptionFormatQueryParams = field()
    

@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatResponse:
    content_type: str = field()
    status_code: int = field()
    
