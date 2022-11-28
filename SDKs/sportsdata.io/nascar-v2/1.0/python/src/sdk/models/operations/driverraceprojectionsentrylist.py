from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class DriverRaceProjectionsEntryListFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class DriverRaceProjectionsEntryListPathParams:
    format: DriverRaceProjectionsEntryListFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    raceid: str = field(metadata={'path_param': { 'field_name': 'raceid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriverRaceProjectionsEntryListRequest:
    path_params: DriverRaceProjectionsEntryListPathParams = field()
    

@dataclass
class DriverRaceProjectionsEntryListResponse:
    content_type: str = field()
    status_code: int = field()
    driver_race_projections: Optional[List[Any]] = field(default=None)
    
