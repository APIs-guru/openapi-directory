from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class NewsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class NewsByPlayerPathParams:
    format: NewsByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsByPlayerRequest:
    path_params: NewsByPlayerPathParams = field(default=None)
    

@dataclass
class NewsByPlayerResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
