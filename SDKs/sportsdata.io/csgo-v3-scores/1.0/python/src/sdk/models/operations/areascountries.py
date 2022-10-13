from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional

class AreasCountriesFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class AreasCountriesPathParams:
    format: AreasCountriesFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class AreasCountriesRequest:
    path_params: AreasCountriesPathParams = field(default=None)
    

@dataclass
class AreasCountriesResponse:
    areas: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
