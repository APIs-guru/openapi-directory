from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportPathParams:
    report_id: str = field(metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetReportRequest:
    path_params: GetReportPathParams = field()
    security: GetReportSecurity = field()
    

@dataclass
class GetReportResponse:
    content_type: str = field()
    status_code: int = field()
    report_output: Optional[shared.ReportOutput] = field(default=None)
    
