from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    max_detour_time: int = field(default=None, metadata={'query_param': { 'field_name': 'maxDetourTime', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute:
    points: Optional[List[PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody:
    route: Optional[PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'route' }})
    

@dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtRequest:
    path_params: PostSearchVersionNumberSearchAlongRouteQueryExtPathParams = field(default=None)
    query_params: PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams = field(default=None)
    request: Optional[PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSearchVersionNumberSearchAlongRouteQueryExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
