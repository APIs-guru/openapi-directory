from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostSearchVersionNumberGeometryFilterExtPathParams:
    ext: shared.ExtEnum = field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList:
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    radius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radius') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vertices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vertices') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress:
    freeform_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeformAddress') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList:
    address: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    poi: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poi') }})
    position: Optional[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometryFilterExtRequestBody:
    geometry_list: Optional[List[PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geometryList') }})
    poi_list: Optional[List[PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiList') }})
    

@dataclass
class PostSearchVersionNumberGeometryFilterExtRequest:
    path_params: PostSearchVersionNumberGeometryFilterExtPathParams = field()
    request: Optional[PostSearchVersionNumberGeometryFilterExtRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSearchVersionNumberGeometryFilterExtResponse:
    content_type: str = field()
    status_code: int = field()
    
