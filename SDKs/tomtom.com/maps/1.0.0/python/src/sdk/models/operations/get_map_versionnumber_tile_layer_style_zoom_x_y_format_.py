from dataclasses import dataclass, field
from typing import Enum,Optional

class GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum(str, Enum):
    JPG = "jpg"
    PNG = "png"

class GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum(str, Enum):
    BASIC = "basic"
    HYBRID = "hybrid"
    LABELS = "labels"

class GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum(str, Enum):
    MAIN = "main"
    NIGHT = "night"


@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams:
    x: int = field(default=None, metadata={'path_param': { 'field_name': 'X', 'style': 'simple', 'explode': False }})
    y: int = field(default=None, metadata={'path_param': { 'field_name': 'Y', 'style': 'simple', 'explode': False }})
    format: GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    layer: GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum = field(default=None, metadata={'path_param': { 'field_name': 'layer', 'style': 'simple', 'explode': False }})
    style: GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum = field(default=None, metadata={'path_param': { 'field_name': 'style', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    zoom: int = field(default=None, metadata={'path_param': { 'field_name': 'zoom', 'style': 'simple', 'explode': False }})
    
class GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum(str, Enum):
    UNIFIED = "Unified"
    IN = "IN"


@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams:
    tile_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tileSize', 'style': 'form', 'explode': True }})
    view: Optional[GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatRequest:
    path_params: GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams = field(default=None)
    query_params: GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams = field(default=None)
    

@dataclass
class GetMapVersionNumberTileLayerStyleZoomXYFormatResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
