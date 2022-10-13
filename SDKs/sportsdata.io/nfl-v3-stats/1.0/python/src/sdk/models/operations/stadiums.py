from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class StadiumsPathParams:
    format: str = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class StadiumsRequest:
    path_params: StadiumsPathParams = field(default=None)
    

@dataclass
class StadiumsResponse:
    content_type: str = field(default=None)
    stadiums: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
