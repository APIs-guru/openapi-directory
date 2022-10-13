from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class InjuriesHistoricalFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class InjuriesHistoricalPathParams:
    format: InjuriesHistoricalFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class InjuriesHistoricalRequest:
    path_params: InjuriesHistoricalPathParams = field(default=None)
    

@dataclass
class InjuriesHistoricalResponse:
    content_type: str = field(default=None)
    injuries: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
