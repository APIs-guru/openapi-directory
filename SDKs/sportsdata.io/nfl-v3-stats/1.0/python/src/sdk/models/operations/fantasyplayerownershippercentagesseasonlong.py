from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum(str, Enum):
    XML = "XML"
    JSON = "JSON"


@dataclass
class FantasyPlayerOwnershipPercentagesSeasonLongPathParams:
    format: FantasyPlayerOwnershipPercentagesSeasonLongFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    season: str = field(metadata={'path_param': { 'field_name': 'season', 'style': 'simple', 'explode': False }})
    week: str = field(metadata={'path_param': { 'field_name': 'week', 'style': 'simple', 'explode': False }})
    

@dataclass
class FantasyPlayerOwnershipPercentagesSeasonLongRequest:
    path_params: FantasyPlayerOwnershipPercentagesSeasonLongPathParams = field()
    

@dataclass
class FantasyPlayerOwnershipPercentagesSeasonLongResponse:
    content_type: str = field()
    status_code: int = field()
    player_ownerships: Optional[List[Any]] = field(default=None)
    
