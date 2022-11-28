from dataclasses import dataclass, field
from typing import Optional
from enum import Enum


@dataclass
class GetMapVersionNumberStaticimagePathParams:
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    
class GetMapVersionNumberStaticimageFormatEnum(str, Enum):
    PNG = "png"
    JPG = "jpg"
    JPEG = "jpeg"

class GetMapVersionNumberStaticimageLayerEnum(str, Enum):
    BASIC = "basic"
    HYBRID = "hybrid"
    LABELS = "labels"

class GetMapVersionNumberStaticimageStyleEnum(str, Enum):
    MAIN = "main"
    NIGHT = "night"

class GetMapVersionNumberStaticimageViewEnum(str, Enum):
    UNIFIED = "Unified"
    IN = "IN"


@dataclass
class GetMapVersionNumberStaticimageQueryParams:
    bbox: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'bbox', 'style': 'form', 'explode': True }})
    center: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'center', 'style': 'form', 'explode': True }})
    format: Optional[GetMapVersionNumberStaticimageFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    layer: Optional[GetMapVersionNumberStaticimageLayerEnum] = field(default=None, metadata={'query_param': { 'field_name': 'layer', 'style': 'form', 'explode': True }})
    style: Optional[GetMapVersionNumberStaticimageStyleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'style', 'style': 'form', 'explode': True }})
    view: Optional[GetMapVersionNumberStaticimageViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    zoom: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'zoom', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberStaticimageRequest:
    path_params: GetMapVersionNumberStaticimagePathParams = field()
    query_params: GetMapVersionNumberStaticimageQueryParams = field()
    

@dataclass
class GetMapVersionNumberStaticimageResponse:
    content_type: str = field()
    status_code: int = field()
    
