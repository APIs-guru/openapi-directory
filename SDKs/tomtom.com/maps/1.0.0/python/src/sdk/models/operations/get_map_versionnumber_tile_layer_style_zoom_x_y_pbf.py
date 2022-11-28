from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum(str, Enum):
    BASIC = "basic"
    HYBRID = "hybrid"
    LABELS = "labels"

class GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum(str, Enum):
    MAIN = "main"


@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams:
    x: int = field(metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: int = field(metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    layer: GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum = field(metadata={'path_param': { 'field_name': 'layer', 'style': 'simple', 'explode': False }})
    style: GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum = field(metadata={'path_param': { 'field_name': 'style', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    zoom: int = field(metadata={'path_param': { 'field_name': 'zoom', 'style': 'simple', 'explode': False }})
    
class GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum(str, Enum):
    UNIFIED = "Unified"
    IL = "IL"
    IN = "IN"


@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams:
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    view: Optional[GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfRequest:
    path_params: GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams = field()
    query_params: GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams = field()
    

@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfResponse:
    content_type: str = field()
    status_code: int = field()
    
