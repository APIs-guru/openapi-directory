from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class NewsByPlayerFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class NewsByPlayerPathParams:
    format: NewsByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class NewsByPlayerRequest:
    path_params: NewsByPlayerPathParams = field()
    

@dataclass
class NewsByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
