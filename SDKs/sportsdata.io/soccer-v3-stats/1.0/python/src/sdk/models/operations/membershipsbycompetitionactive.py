from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class MembershipsByCompetitionActiveFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByCompetitionActivePathParams:
    competition: str = field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    format: MembershipsByCompetitionActiveFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByCompetitionActiveRequest:
    path_params: MembershipsByCompetitionActivePathParams = field()
    

@dataclass
class MembershipsByCompetitionActiveResponse:
    content_type: str = field()
    status_code: int = field()
    memberships: Optional[List[Any]] = field(default=None)
    
