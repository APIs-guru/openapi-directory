from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class MembershipsByTeamHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByTeamHistoricalPathParams:
    format: MembershipsByTeamHistoricalFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = field(metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByTeamHistoricalRequest:
    path_params: MembershipsByTeamHistoricalPathParams = field()
    

@dataclass
class MembershipsByTeamHistoricalResponse:
    content_type: str = field()
    status_code: int = field()
    memberships: Optional[List[Any]] = field(default=None)
    
