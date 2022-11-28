from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum

class AreasCountriesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class AreasCountriesPathParams:
    format: AreasCountriesFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class AreasCountriesRequest:
    path_params: AreasCountriesPathParams = field()
    

@dataclass
class AreasCountriesResponse:
    content_type: str = field()
    status_code: int = field()
    areas: Optional[List[Any]] = field(default=None)
    
