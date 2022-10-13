from dataclasses import dataclass, field
from typing import Enum,List
from sdk.models import shared


@dataclass
class GetSearchVersionNumberGeometryFilterExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberGeometryFilterExtQueryParams:
    geometry_list: str = field(default=None, metadata={'query_param': { 'field_name': 'geometryList', 'style': 'form', 'explode': True }})
    poi_list: str = field(default=None, metadata={'query_param': { 'field_name': 'poiList', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberGeometryFilterExtRequest:
    path_params: GetSearchVersionNumberGeometryFilterExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberGeometryFilterExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberGeometryFilterExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
