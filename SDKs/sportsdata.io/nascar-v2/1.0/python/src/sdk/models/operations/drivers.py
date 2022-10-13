from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class DriversFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class DriversPathParams:
    format: DriversFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriversRequest:
    path_params: DriversPathParams = field(default=None)
    

@dataclass
class DriversResponse:
    content_type: str = field(default=None)
    drivers: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
