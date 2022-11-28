from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ImportScanDataPathParams:
    site_id: str = field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ImportScanDataSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ImportScanDataRequest:
    path_params: ImportScanDataPathParams = field()
    security: ImportScanDataSecurity = field()
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/octet-stream' }})
    

@dataclass
class ImportScanDataResponse:
    content_type: str = field()
    status_code: int = field()
    task: Optional[shared.Task] = field(default=None)
    
