from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetCapabilitiesPathParams:
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    
class GetCapabilitiesRequestEnum(str, Enum):
    GET_CAPABILITIES = "GetCapabilities"

class GetCapabilitiesServiceEnum(str, Enum):
    WMS = "WMS"

class GetCapabilitiesVersionEnum(str, Enum):
    ONE_1_1 = "1.1.1"


@dataclass
class GetCapabilitiesQueryParams:
    request: GetCapabilitiesRequestEnum = field(default=None, metadata={'query_param': { 'field_name': 'request', 'style': 'form', 'explode': True }})
    service: GetCapabilitiesServiceEnum = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    version: Optional[GetCapabilitiesVersionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCapabilitiesRequest:
    path_params: GetCapabilitiesPathParams = field(default=None)
    query_params: GetCapabilitiesQueryParams = field(default=None)
    

@dataclass
class GetCapabilitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
