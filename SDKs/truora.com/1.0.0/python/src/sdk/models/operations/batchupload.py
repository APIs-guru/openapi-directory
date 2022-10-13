from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BatchUploadPathParams:
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchUploadSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class BatchUploadRequest:
    path_params: BatchUploadPathParams = field(default=None)
    request: shared.BatchUploadInput = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: BatchUploadSecurity = field(default=None)
    

@dataclass
class BatchUploadResponse:
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    report_output: Optional[shared.ReportOutput] = field(default=None)
    status_code: int = field(default=None)
    
