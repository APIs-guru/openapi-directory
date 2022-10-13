from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostSearchVersionNumberGeometryFilterExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList:
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    radius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radius' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vertices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress:
    freeform_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'freeformAddress' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList:
    address: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    poi: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poi' }})
    position: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBody:
    geometry_list: Optional[List[PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geometryList' }})
    poi_list: Optional[List[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poiList' }})
    

@dataclass
class PostSearchVersionNumberGeometryFilterExtRequest:
    path_params: PostSearchVersionNumberGeometryFilterExtPathParams = field(default=None)
    request: Optional[PostSearchVersionNumberGeometryFilterExtRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSearchVersionNumberGeometryFilterExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
