from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class DriversFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class DriversPathParams:
    format: DriversFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DriversRequest:
    path_params: DriversPathParams = field()
    

@dataclass
class DriversResponse:
    content_type: str = field()
    status_code: int = field()
    drivers: Optional[List[Any]] = field(default=None)
    
