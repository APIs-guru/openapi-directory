from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class CompetitionFixturesLeagueDetailsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CompetitionFixturesLeagueDetailsPathParams:
    competitionid: str = field(metadata={'path_param': { 'field_name': 'competitionid', 'style': 'simple', 'explode': False }})
    format: CompetitionFixturesLeagueDetailsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompetitionFixturesLeagueDetailsRequest:
    path_params: CompetitionFixturesLeagueDetailsPathParams = field()
    

@dataclass
class CompetitionFixturesLeagueDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    competition_detail: Optional[Any] = field(default=None)
    
