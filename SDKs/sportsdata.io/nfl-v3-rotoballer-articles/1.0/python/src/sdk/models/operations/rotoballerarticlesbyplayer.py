from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class RotoballerArticlesByPlayerFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class RotoballerArticlesByPlayerPathParams:
    format: RotoballerArticlesByPlayerFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    playerid: str = field(default=None, metadata={'path_param': { 'field_name': 'playerid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotoballerArticlesByPlayerRequest:
    path_params: RotoballerArticlesByPlayerPathParams = field(default=None)
    

@dataclass
class RotoballerArticlesByPlayerResponse:
    articles: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
