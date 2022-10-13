from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StatusScanPagePathParams:
    scan_id: int = field(default=None, metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StatusScanPageRequest:
    path_params: StatusScanPagePathParams = field(default=None)
    

@dataclass
class StatusScanPageResponse:
    api_response: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
