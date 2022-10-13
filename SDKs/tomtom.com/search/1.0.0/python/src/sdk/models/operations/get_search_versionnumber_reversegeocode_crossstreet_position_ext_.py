from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    position: str = field(default=None, metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams:
    heading: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'heading', 'style': 'form', 'explode': True }})
    language: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    spatial_keys: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'spatialKeys', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest:
    path_params: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
