from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostSearchVersionNumberGeometrySearchQueryExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSearchVersionNumberGeometrySearchQueryExtQueryParams:
    extended_postal_codes_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList:
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    radius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radius' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vertices: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vertices' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberGeometrySearchQueryExtRequestBody:
    geometry_list: Optional[List[PostSearchVersionNumberGeometrySearchQueryExtRequestBodyGeometryList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geometryList' }})
    

@dataclass
class PostSearchVersionNumberGeometrySearchQueryExtRequest:
    path_params: PostSearchVersionNumberGeometrySearchQueryExtPathParams = field(default=None)
    query_params: PostSearchVersionNumberGeometrySearchQueryExtQueryParams = field(default=None)
    request: Optional[PostSearchVersionNumberGeometrySearchQueryExtRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSearchVersionNumberGeometrySearchQueryExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
