from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PicoLoadmanagementSetDynamicCurrentPostPathParams:
    serial: int = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoLoadmanagementSetDynamicCurrentPostQueryParams:
    current: int = field(metadata={'query_param': { 'field_name': 'current', 'style': 'form', 'explode': True }})
    

@dataclass
class PicoLoadmanagementSetDynamicCurrentPostRequest:
    path_params: PicoLoadmanagementSetDynamicCurrentPostPathParams = field()
    query_params: PicoLoadmanagementSetDynamicCurrentPostQueryParams = field()
    

@dataclass
class PicoLoadmanagementSetDynamicCurrentPostResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
