from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class MembershipsByTeamActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByTeamActivePathParams:
    format: MembershipsByTeamActiveFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = field(metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByTeamActiveRequest:
    path_params: MembershipsByTeamActivePathParams = field()
    

@dataclass
class MembershipsByTeamActiveResponse:
    content_type: str = field()
    status_code: int = field()
    memberships: Optional[List[Any]] = field(default=None)
    
