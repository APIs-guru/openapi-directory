from dataclasses import dataclass, field
from typing import Enum,Optional

class GetMapVersionNumberCopyrightsCaptionFormatFormatEnum(str, Enum):
    JSON = "json"
    JSONP = "jsonp"
    XML = "xml"


@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatPathParams:
    format: GetMapVersionNumberCopyrightsCaptionFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatRequest:
    path_params: GetMapVersionNumberCopyrightsCaptionFormatPathParams = field(default=None)
    query_params: GetMapVersionNumberCopyrightsCaptionFormatQueryParams = field(default=None)
    

@dataclass
class GetMapVersionNumberCopyrightsCaptionFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
