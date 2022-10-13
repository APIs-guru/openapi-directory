from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateReportSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateReportRequest:
    request: shared.CreateReportInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateReportSecurity = field(default=None)
    

@dataclass
class CreateReportResponse:
    content_type: str = field(default=None)
    report_output: Optional[shared.ReportOutput] = field(default=None)
    status_code: int = field(default=None)
    
