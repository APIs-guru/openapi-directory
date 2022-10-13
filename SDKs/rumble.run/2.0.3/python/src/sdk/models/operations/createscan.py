from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateScanPathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateScanSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateScanRequest:
    path_params: CreateScanPathParams = field(default=None)
    request: Optional[shared.ScanOptions] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    security: CreateScanSecurity = field(default=None)
    

@dataclass
class CreateScanResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    task: Optional[shared.Task] = field(default=None)
    
