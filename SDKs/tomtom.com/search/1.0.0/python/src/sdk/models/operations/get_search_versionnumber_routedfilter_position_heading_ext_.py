from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams:
    ext: shared.ExtEnum = field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    heading: float = field(metadata={'path_param': { 'field_name': 'heading', 'style': 'simple', 'explode': False }})
    position: str = field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams:
    poi_list: str = field(metadata={'query_param': { 'field_name': 'poiList', 'style': 'form', 'explode': True }})
    routing_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'routingTimeout', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest:
    path_params: GetSearchVersionNumberRoutedFilterPositionHeadingExtPathParams = field()
    query_params: GetSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams = field()
    

@dataclass
class GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
    content_type: str = field()
    status_code: int = field()
    
