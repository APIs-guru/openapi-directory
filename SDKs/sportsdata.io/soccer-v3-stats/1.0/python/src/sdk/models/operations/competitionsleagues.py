from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class CompetitionsLeaguesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CompetitionsLeaguesPathParams:
    format: CompetitionsLeaguesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompetitionsLeaguesRequest:
    path_params: CompetitionsLeaguesPathParams = field()
    

@dataclass
class CompetitionsLeaguesResponse:
    content_type: str = field()
    status_code: int = field()
    competitions: Optional[List[Any]] = field(default=None)
    
