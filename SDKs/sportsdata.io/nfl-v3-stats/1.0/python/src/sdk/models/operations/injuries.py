from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class InjuriesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class InjuriesPathParams:
    format: InjuriesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class InjuriesRequest:
    path_params: InjuriesPathParams = field()
    

@dataclass
class InjuriesResponse:
    content_type: str = field()
    status_code: int = field()
    injuries: Optional[List[Any]] = field(default=None)
    
