from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class DfsSlatesByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DfsSlatesByWeekPathParams:
    format: DfsSlatesByWeekFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(default=None, metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(default=None, metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class DfsSlatesByWeekRequest:
    path_params: DfsSlatesByWeekPathParams = field(default=None)
    

@dataclass
class DfsSlatesByWeekResponse:
    content_type: str = field(default=None)
    dfs_slates: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
