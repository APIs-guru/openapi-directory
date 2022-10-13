from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class MembershipsByCompetitionHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByCompetitionHistoricalPathParams:
    competition: str = field(default=None, metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    format: MembershipsByCompetitionHistoricalFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByCompetitionHistoricalRequest:
    path_params: MembershipsByCompetitionHistoricalPathParams = field(default=None)
    

@dataclass
class MembershipsByCompetitionHistoricalResponse:
    content_type: str = field(default=None)
    memberships: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
