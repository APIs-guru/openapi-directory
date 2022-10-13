from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams:
    ext: shared.ExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    heading: float = field(default=None, metadata={'path_param': { 'field_name': 'heading', 'style': 'simple', 'explode': False }})
    position: str = field(default=None, metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams:
    poi_list: str = field(default=None, metadata={'query_param': { 'field_name': 'poiList', 'style': 'form', 'explode': True }})
    routing_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'routingTimeout', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest:
    path_params: GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
