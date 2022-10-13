from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class SpellsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class SpellsPathParams:
    format: SpellsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SpellsRequest:
    path_params: SpellsPathParams = field(default=None)
    

@dataclass
class SpellsResponse:
    content_type: str = field(default=None)
    spells: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
