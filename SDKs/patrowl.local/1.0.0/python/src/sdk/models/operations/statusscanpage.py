from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StatusScanPagePathParams:
    scan_id: int = field(metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StatusScanPageRequest:
    path_params: StatusScanPagePathParams = field()
    

@dataclass
class StatusScanPageResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[Any] = field(default=None)
    
