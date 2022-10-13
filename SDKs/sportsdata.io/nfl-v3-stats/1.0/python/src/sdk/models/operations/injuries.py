from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class InjuriesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class InjuriesPathParams:
    format: InjuriesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class InjuriesRequest:
    path_params: InjuriesPathParams = field(default=None)
    

@dataclass
class InjuriesResponse:
    content_type: str = field(default=None)
    injuries: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
