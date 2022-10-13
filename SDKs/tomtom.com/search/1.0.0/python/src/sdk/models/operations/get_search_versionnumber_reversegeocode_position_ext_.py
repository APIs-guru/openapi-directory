from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSearchVersionNumberReverseGeocodePositionExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    position: str = field(default=None, metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberReverseGeocodePositionExtQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    heading: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'heading', 'style': 'form', 'explode': True }})
    number: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    radius: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    return_road_use: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnRoadUse', 'style': 'form', 'explode': True }})
    return_speed_limit: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnSpeedLimit', 'style': 'form', 'explode': True }})
    road_use: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'roadUse', 'style': 'form', 'explode': True }})
    spatial_keys: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'spatialKeys', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberReverseGeocodePositionExtRequest:
    path_params: GetSearchVersionNumberReverseGeocodePositionExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberReverseGeocodePositionExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberReverseGeocodePositionExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
