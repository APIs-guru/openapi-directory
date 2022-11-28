from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams:
    ext: shared.ExtEnum = field(metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    heading: float = field(metadata={'path_param': { 'field_name': 'heading', 'style': 'simple', 'explode': False }})
    position: str = field(metadata={'path_param': { 'field_name': 'position', 'style': 'simple', 'explode': False }})
    version_number: int = field(metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams:
    routing_timeout: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'routingTimeout', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress:
    freeform_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeformAddress') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList:
    address: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    poi: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPoi] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poi') }})
    position: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiListPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    

@dataclass_json
@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody:
    poi_list: Optional[List[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBodyPoiList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poiList') }})
    

@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest:
    path_params: PostSearchVersionNumberRoutedFilterPositionHeadingExtPathParams = field()
    query_params: PostSearchVersionNumberRoutedFilterPositionHeadingExtQueryParams = field()
    request: Optional[PostSearchVersionNumberRoutedFilterPositionHeadingExtRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse:
    content_type: str = field()
    status_code: int = field()
    
