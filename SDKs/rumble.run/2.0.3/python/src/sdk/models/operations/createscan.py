from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateScanPathParams:
    site_id: str = field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateScanSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateScanRequest:
    path_params: CreateScanPathParams = field()
    security: CreateScanSecurity = field()
    request: Optional[shared.ScanOptions] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateScanResponse:
    content_type: str = field()
    status_code: int = field()
    task: Optional[shared.Task] = field(default=None)
    
