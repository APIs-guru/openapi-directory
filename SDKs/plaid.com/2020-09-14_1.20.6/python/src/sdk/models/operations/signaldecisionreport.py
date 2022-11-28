from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SignalDecisionReportRequest:
    request: shared.SignalDecisionReportRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SignalDecisionReportResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    signal_decision_report_response: Optional[shared.SignalDecisionReportResponse] = field(default=None)
    
