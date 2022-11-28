from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class SpellsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class SpellsPathParams:
    format: SpellsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class SpellsRequest:
    path_params: SpellsPathParams = field()
    

@dataclass
class SpellsResponse:
    content_type: str = field()
    status_code: int = field()
    spells: Optional[List[Any]] = field(default=None)
    
