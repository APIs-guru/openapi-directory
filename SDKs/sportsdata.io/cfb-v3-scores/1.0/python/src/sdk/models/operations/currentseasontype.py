from dataclasses import dataclass, field
from typing import Enum,Optional

class CurrentSeasontypeFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class CurrentSeasontypePathParams:
    format: CurrentSeasontypeFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CurrentSeasontypeRequest:
    path_params: CurrentSeasontypePathParams = field(default=None)
    

@dataclass
class CurrentSeasontypeResponse:
    content_type: str = field(default=None)
    current_seasontype_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
