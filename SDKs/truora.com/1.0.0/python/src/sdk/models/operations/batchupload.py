from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BatchUploadPathParams:
    report_id: str = field(metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BatchUploadSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class BatchUploadRequest:
    path_params: BatchUploadPathParams = field()
    request: shared.BatchUploadInput = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: BatchUploadSecurity = field()
    

@dataclass
class BatchUploadResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[Any] = field(default=None)
    report_output: Optional[shared.ReportOutput] = field(default=None)
    
