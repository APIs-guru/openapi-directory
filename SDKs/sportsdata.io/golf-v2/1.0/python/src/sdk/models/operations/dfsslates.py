from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class DfsSlatesFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DfsSlatesPathParams:
    format: DfsSlatesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    tournamentid: str = field(metadata={'path_param': { 'field_name': 'tournamentid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DfsSlatesRequest:
    path_params: DfsSlatesPathParams = field()
    

@dataclass
class DfsSlatesResponse:
    content_type: str = field()
    status_code: int = field()
    dfs_slates: Optional[List[Any]] = field(default=None)
    
