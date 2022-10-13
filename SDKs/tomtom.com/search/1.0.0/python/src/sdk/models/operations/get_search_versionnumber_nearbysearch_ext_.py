from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSearchVersionNumberNearbySearchExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberNearbySearchExtQueryParams:
    btm_right: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'btmRight', 'style': 'form', 'explode': True }})
    country_set: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'countrySet', 'style': 'form', 'explode': True }})
    extended_postal_codes_for: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'extendedPostalCodesFor', 'style': 'form', 'explode': True }})
    idx_set: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'idxSet', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    lat: float = field(default=None, metadata={'query_param': { 'field_name': 'lat', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    lon: float = field(default=None, metadata={'query_param': { 'field_name': 'lon', 'style': 'form', 'explode': True }})
    max_fuzzy_level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxFuzzyLevel', 'style': 'form', 'explode': True }})
    min_fuzzy_level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'minFuzzyLevel', 'style': 'form', 'explode': True }})
    ofs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ofs', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    top_left: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'topLeft', 'style': 'form', 'explode': True }})
    view: Optional[shared.ViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberNearbySearchExtRequest:
    path_params: GetSearchVersionNumberNearbySearchExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberNearbySearchExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberNearbySearchExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
