from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class DfsSlatesByWeekFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class DfsSlatesByWeekPathParams:
    format: DfsSlatesByWeekFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class DfsSlatesByWeekRequest:
    path_params: DfsSlatesByWeekPathParams = field()
    

@dataclass
class DfsSlatesByWeekResponse:
    content_type: str = field()
    status_code: int = field()
    dfs_slates: Optional[List[Any]] = field(default=None)
    
