from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class ItemsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ItemsPathParams:
    format: ItemsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ItemsRequest:
    path_params: ItemsPathParams = field()
    

@dataclass
class ItemsResponse:
    content_type: str = field()
    status_code: int = field()
    items: Optional[List[Any]] = field(default=None)
    
