from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class ItemsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class ItemsPathParams:
    format: ItemsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class ItemsRequest:
    path_params: ItemsPathParams = field(default=None)
    

@dataclass
class ItemsResponse:
    content_type: str = field(default=None)
    items: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
