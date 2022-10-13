from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class DriverRaceProjectionsEntryListFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class DriverRaceProjectionsEntryListPathParams:
    format: DriverRaceProjectionsEntryListFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    raceid: str = field(default=None, metadata={'path_param': { 'field_name': 'raceid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriverRaceProjectionsEntryListRequest:
    path_params: DriverRaceProjectionsEntryListPathParams = field(default=None)
    

@dataclass
class DriverRaceProjectionsEntryListResponse:
    content_type: str = field(default=None)
    driver_race_projections: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
