from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class MembershipsByCompetitionActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByCompetitionActivePathParams:
    competition: str = field(default=None, metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    format: MembershipsByCompetitionActiveFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByCompetitionActiveRequest:
    path_params: MembershipsByCompetitionActivePathParams = field(default=None)
    

@dataclass
class MembershipsByCompetitionActiveResponse:
    content_type: str = field(default=None)
    memberships: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
