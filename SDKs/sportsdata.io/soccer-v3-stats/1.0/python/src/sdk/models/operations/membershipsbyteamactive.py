from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class MembershipsByTeamActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByTeamActivePathParams:
    format: MembershipsByTeamActiveFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    teamid: str = field(default=None, metadata={'path_param': { 'field_name': 'teamid', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByTeamActiveRequest:
    path_params: MembershipsByTeamActivePathParams = field(default=None)
    

@dataclass
class MembershipsByTeamActiveResponse:
    content_type: str = field(default=None)
    memberships: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
