from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportScanDataPathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportScanDataSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ImportScanDataRequest:
    path_params: ImportScanDataPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    security: ImportScanDataSecurity = field(default=None)
    

@dataclass
class ImportScanDataResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    task: Optional[shared.Task] = field(default=None)
    
