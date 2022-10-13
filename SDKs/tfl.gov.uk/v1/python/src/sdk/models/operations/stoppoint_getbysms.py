from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StopPointGetBySmsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointGetBySmsQueryParams:
    output: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointGetBySmsRequest:
    path_params: StopPointGetBySmsPathParams = field(default=None)
    query_params: StopPointGetBySmsQueryParams = field(default=None)
    

@dataclass
class StopPointGetBySmsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
