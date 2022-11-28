from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CleanScanPagePathParams:
    scan_id: int = field(metadata={'path_param': { 'field_name': 'scanId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CleanScanPageRequest:
    path_params: CleanScanPagePathParams = field()
    

@dataclass
class CleanScanPageResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[Any] = field(default=None)
    
