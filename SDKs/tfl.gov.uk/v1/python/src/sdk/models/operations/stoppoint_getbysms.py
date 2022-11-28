from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StopPointGetBySmsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopPointGetBySmsQueryParams:
    output: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'output', 'style': 'form', 'explode': True }})
    

@dataclass
class StopPointGetBySmsRequest:
    path_params: StopPointGetBySmsPathParams = field()
    query_params: StopPointGetBySmsQueryParams = field()
    

@dataclass
class StopPointGetBySmsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
