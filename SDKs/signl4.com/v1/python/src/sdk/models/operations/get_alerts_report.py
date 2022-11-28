from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlertsReportQueryParams:
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlertsReportRequest:
    query_params: GetAlertsReportQueryParams = field()
    

@dataclass
class GetAlertsReportResponse:
    content_type: str = field()
    status_code: int = field()
    alert_report: Optional[shared.AlertReport] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
