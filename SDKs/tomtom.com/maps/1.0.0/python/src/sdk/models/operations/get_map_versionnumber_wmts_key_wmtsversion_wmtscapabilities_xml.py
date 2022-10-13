from dataclasses import dataclass, field
from typing import Enum

class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum(str, Enum):
    ONE_0_0 = "1.0.0"


@dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams:
    key: str = field(default=None, metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    wmts_version: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum = field(default=None, metadata={'path_param': { 'field_name': 'wmtsVersion', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest:
    path_params: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams = field(default=None)
    

@dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
