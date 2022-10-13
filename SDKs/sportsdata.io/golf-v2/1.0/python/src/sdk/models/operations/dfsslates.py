from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class DfsSlatesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DfsSlatesPathParams:
    format: DfsSlatesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(default=None, metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DfsSlatesRequest:
    path_params: DfsSlatesPathParams = field(default=None)
    

@dataclass
class DfsSlatesResponse:
    content_type: str = field(default=None)
    dfs_slates: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
