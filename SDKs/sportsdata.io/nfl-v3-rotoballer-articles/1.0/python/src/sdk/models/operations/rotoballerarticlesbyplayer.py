from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class RotoballerArticlesByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RotoballerArticlesByPlayerPathParams:
    format: RotoballerArticlesByPlayerFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotoballerArticlesByPlayerRequest:
    path_params: RotoballerArticlesByPlayerPathParams = field()
    

@dataclass
class RotoballerArticlesByPlayerResponse:
    content_type: str = field()
    status_code: int = field()
    articles: Optional[List[Any]] = field(default=None)
    
