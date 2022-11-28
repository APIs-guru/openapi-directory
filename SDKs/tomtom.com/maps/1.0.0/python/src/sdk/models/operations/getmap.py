from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetMapPathParams:
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    
class GetMapFormatEnum(str, Enum):
    IMAGE_JPEG = "image/jpeg"
    IMAGE_PNG = "image/png"

class GetMapLayersEnum(str, Enum):
    BASIC = "basic"

class GetMapRequestEnum(str, Enum):
    GET_MAP = "GetMap"

class GetMapServiceEnum(str, Enum):
    WMS = "WMS"

class GetMapSrsEnum(str, Enum):
    EPSG_3857 = "EPSG:3857"
    EPSG_4326 = "EPSG:4326"

class GetMapStylesEnum(str, Enum):
    UNKNOWN = ""

class GetMapVersionEnum(str, Enum):
    ONE_1_1 = "1.1.1"


@dataclass
class GetMapQueryParams:
    bbox: str = field(metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    format: GetMapFormatEnum = field(metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    height: int = field(metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    layers: GetMapLayersEnum = field(metadata={'query_param': { 'field_name': 'layers', 'style': 'form', 'explode': True }})
    request: GetMapRequestEnum = field(metadata={'query_param': { 'field_name': 'request', 'style': 'form', 'explode': True }})
    srs: GetMapSrsEnum = field(metadata={'query_param': { 'field_name': 'srs', 'style': 'form', 'explode': True }})
    version: GetMapVersionEnum = field(metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    width: int = field(metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    service: Optional[GetMapServiceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    styles: Optional[GetMapStylesEnum] = field(default=None, metadata={'query_param': { 'field_name': 'styles', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapRequest:
    path_params: GetMapPathParams = field()
    query_params: GetMapQueryParams = field()
    

@dataclass
class GetMapResponse:
    content_type: str = field()
    status_code: int = field()
    
