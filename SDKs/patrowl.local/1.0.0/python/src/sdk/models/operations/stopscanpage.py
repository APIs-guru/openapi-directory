from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StopScanPagePathParams:
    scan_id: int = field(metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopScanPageRequest:
    path_params: StopScanPagePathParams = field()
    

@dataclass
class StopScanPageResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[Any] = field(default=None)
    
