from dataclasses import dataclass, field
from enum import Enum
from sdk.models import shared


@dataclass
class GetSearchVersionNumberGeometryFilterExtPathParams:
    ext: shared.ExtEnum = field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberGeometryFilterExtQueryParams:
    geometry_list: str = field(metadata={'query_param': { 'field_name': 'geometryList', 'style': 'form', 'explode': True }})
    poi_list: str = field(metadata={'query_param': { 'field_name': 'poiList', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberGeometryFilterExtRequest:
    path_params: GetSearchVersionNumberGeometryFilterExtPathParams = field()
    query_params: GetSearchVersionNumberGeometryFilterExtQueryParams = field()
    

@dataclass
class GetSearchVersionNumberGeometryFilterExtResponse:
    content_type: str = field()
    status_code: int = field()
    
