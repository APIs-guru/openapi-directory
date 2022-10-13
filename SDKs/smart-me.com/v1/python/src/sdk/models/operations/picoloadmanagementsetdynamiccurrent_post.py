from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PicoLoadmanagementSetDynamicCurrentPostPathParams:
    serial: int = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class PicoLoadmanagementSetDynamicCurrentPostQueryParams:
    current: int = field(default=None, metadata={'query_param': { 'field_name': 'current', 'style': 'form', 'explode': True }})
    

@dataclass
class PicoLoadmanagementSetDynamicCurrentPostRequest:
    path_params: PicoLoadmanagementSetDynamicCurrentPostPathParams = field(default=None)
    query_params: PicoLoadmanagementSetDynamicCurrentPostQueryParams = field(default=None)
    

@dataclass
class PicoLoadmanagementSetDynamicCurrentPostResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
