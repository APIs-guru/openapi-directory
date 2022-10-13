from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SignalReturnReportRequest:
    request: shared.SignalReturnReportRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SignalReturnReportResponse:
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    signal_return_report_response: Optional[shared.SignalReturnReportResponse] = field(default=None)
    status_code: int = field(default=None)
    
