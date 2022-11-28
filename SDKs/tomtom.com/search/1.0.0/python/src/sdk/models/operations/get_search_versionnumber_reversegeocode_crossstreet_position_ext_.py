from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams:
    ext: shared.ExtEnum = field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    position: str = field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams:
    heading: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'heading', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    spatial_keys: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'spatialKeys', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest:
    path_params: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams = field()
    query_params: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams = field()
    

@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse:
    content_type: str = field()
    status_code: int = field()
    
