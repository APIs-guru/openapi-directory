from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class MembershipsByCompetitionHistoricalFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class MembershipsByCompetitionHistoricalPathParams:
    competition: str = field(metadata={'path_param': { 'field_name': 'competition', 'style': 'simple', 'explode': False }})
    format: MembershipsByCompetitionHistoricalFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class MembershipsByCompetitionHistoricalRequest:
    path_params: MembershipsByCompetitionHistoricalPathParams = field()
    

@dataclass
class MembershipsByCompetitionHistoricalResponse:
    content_type: str = field()
    status_code: int = field()
    memberships: Optional[List[Any]] = field(default=None)
    
