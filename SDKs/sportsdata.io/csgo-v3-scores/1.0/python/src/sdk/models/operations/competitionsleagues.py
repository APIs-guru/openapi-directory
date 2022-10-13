from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class CompetitionsLeaguesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CompetitionsLeaguesPathParams:
    format: CompetitionsLeaguesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompetitionsLeaguesRequest:
    path_params: CompetitionsLeaguesPathParams = field(default=None)
    

@dataclass
class CompetitionsLeaguesResponse:
    competitions: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
