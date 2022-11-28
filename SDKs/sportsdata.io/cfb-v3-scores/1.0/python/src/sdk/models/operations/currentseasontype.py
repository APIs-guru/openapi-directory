from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class CurrentSeasontypeFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentSeasontypePathParams:
    format: CurrentSeasontypeFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentSeasontypeRequest:
    path_params: CurrentSeasontypePathParams = field()
    

@dataclass
class CurrentSeasontypeResponse:
    content_type: str = field()
    status_code: int = field()
    current_seasontype_200_application_json_string: Optional[str] = field(default=None)
    
