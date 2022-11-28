from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateReportSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateReportRequest:
    request: shared.CreateReportInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateReportSecurity = field()
    

@dataclass
class CreateReportResponse:
    content_type: str = field()
    status_code: int = field()
    report_output: Optional[shared.ReportOutput] = field(default=None)
    
