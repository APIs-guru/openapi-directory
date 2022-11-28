from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class InjuriesHistoricalFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class InjuriesHistoricalPathParams:
    format: InjuriesHistoricalFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class InjuriesHistoricalRequest:
    path_params: InjuriesHistoricalPathParams = field()
    

@dataclass
class InjuriesHistoricalResponse:
    content_type: str = field()
    status_code: int = field()
    injuries: Optional[List[Any]] = field(default=None)
    
