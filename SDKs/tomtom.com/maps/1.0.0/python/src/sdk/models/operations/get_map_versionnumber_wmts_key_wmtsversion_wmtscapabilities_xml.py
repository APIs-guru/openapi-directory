from dataclasses import dataclass, field
from enum import Enum

class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum(str, Enum):
    ONE_0_0 = "1.0.0"


@dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams:
    key: str = field(metadata={'path_param': { 'field_name': 'key', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    wmts_version: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLWmtsVersionEnum = field(metadata={'path_param': { 'field_name': 'wmtsVersion', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest:
    path_params: GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLPathParams = field()
    

@dataclass
class GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse:
    content_type: str = field()
    status_code: int = field()
    
