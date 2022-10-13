from dataclasses import dataclass, field
from typing import Enum,Optional

class GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum(str, Enum):
    BASIC = "basic"
    HYBRID = "hybrid"
    LABELS = "labels"

class GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum(str, Enum):
    MAIN = "main"


@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams:
    x: int = field(default=None, metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: int = field(default=None, metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    layer: GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum = field(default=None, metadata={'path_param': { 'field_name': 'layer', 'style': 'simple', 'explode': False }})
    style: GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum = field(default=None, metadata={'path_param': { 'field_name': 'style', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    zoom: int = field(default=None, metadata={'path_param': { 'field_name': 'zoom', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams = field(default=None)
    query_params: GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams = field(default=None)
    

@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYPbfResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
