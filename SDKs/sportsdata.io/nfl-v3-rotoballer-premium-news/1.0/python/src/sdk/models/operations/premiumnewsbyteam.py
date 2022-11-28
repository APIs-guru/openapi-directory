from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class PremiumNewsByTeamFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsByTeamPathParams:
    format: PremiumNewsByTeamFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = field(metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsByTeamRequest:
    path_params: PremiumNewsByTeamPathParams = field()
    

@dataclass
class PremiumNewsByTeamResponse:
    content_type: str = field()
    status_code: int = field()
    news: Optional[List[Any]] = field(default=None)
    
