from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class DfsSlatesByDateFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class DfsSlatesByDatePathParams:
    date: str = field(default=None, metadata={'path_param': { 'field_name': 'date', 'style': 'simple', 'explode': False }})
    format: DfsSlatesByDateFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class DfsSlatesByDateRequest:
    path_params: DfsSlatesByDatePathParams = field(default=None)
    

@dataclass
class DfsSlatesByDateResponse:
    content_type: str = field(default=None)
    dfs_slates: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
