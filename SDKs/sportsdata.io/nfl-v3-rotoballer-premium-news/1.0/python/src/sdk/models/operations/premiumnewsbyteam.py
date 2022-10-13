from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class PremiumNewsByTeamFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class PremiumNewsByTeamPathParams:
    format: PremiumNewsByTeamFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    team: str = field(default=None, metadata={'path_param': { 'field_name': 'team', 'style': 'simple', 'explode': False }})
    

@dataclass
class PremiumNewsByTeamRequest:
    path_params: PremiumNewsByTeamPathParams = field(default=None)
    

@dataclass
class PremiumNewsByTeamResponse:
    content_type: str = field(default=None)
    news: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
