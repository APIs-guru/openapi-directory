from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetSearchVersionNumberGeometrySearchQueryExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    query: str = field(default=None, metadata={'path_param': { 'field_name': 'query', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberGeometrySearchQueryExtQueryParams:
    extended_postal_codes_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    geometry_list: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'geometryList', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberGeometrySearchQueryExtRequest:
    path_params: GetSearchVersionNumberGeometrySearchQueryExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberGeometrySearchQueryExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberGeometrySearchQueryExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
