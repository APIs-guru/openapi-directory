from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class MembershipsByTeamHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByTeamHistoricalPathParams:
    format: MembershipsByTeamHistoricalFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = field(default=None, metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByTeamHistoricalRequest:
    path_params: MembershipsByTeamHistoricalPathParams = field(default=None)
    

@dataclass
class MembershipsByTeamHistoricalResponse:
    content_type: str = field(default=None)
    memberships: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
