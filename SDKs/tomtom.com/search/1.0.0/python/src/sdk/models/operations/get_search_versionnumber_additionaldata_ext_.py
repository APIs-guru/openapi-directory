from dataclasses import dataclass, field
from typing import Enum,Optional

class GetSearchVersionNumberAdditionalDataExtExtEnum(str, Enum):
    JSON = "json"


@dataclass
class GetSearchVersionNumberAdditionalDataExtPathParams:
    ext: GetSearchVersionNumberAdditionalDataExtExtEnum = field(default=None, metadata={'path_param': { 'field_name': 'ext', 'style': 'simple', 'explode': False }})
    version_number: int = field(default=None, metadata={'path_param': { 'field_name': 'versionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSearchVersionNumberAdditionalDataExtQueryParams:
    geometries: str = field(default=None, metadata={'query_param': { 'field_name': 'geometries', 'style': 'form', 'explode': True }})
    geometries_zoom: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'geometriesZoom', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchVersionNumberAdditionalDataExtRequest:
    path_params: GetSearchVersionNumberAdditionalDataExtPathParams = field(default=None)
    query_params: GetSearchVersionNumberAdditionalDataExtQueryParams = field(default=None)
    

@dataclass
class GetSearchVersionNumberAdditionalDataExtResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
