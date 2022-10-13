from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class CompetitionFixturesLeagueDetailsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CompetitionFixturesLeagueDetailsPathParams:
    competitionid: str = field(default=None, metadata={'path_param': { 'field_name': 'competitionid', 'style': 'simple', 'explode': False }})
    format: CompetitionFixturesLeagueDetailsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompetitionFixturesLeagueDetailsRequest:
    path_params: CompetitionFixturesLeagueDetailsPathParams = field(default=None)
    

@dataclass
class CompetitionFixturesLeagueDetailsResponse:
    competition_detail: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
