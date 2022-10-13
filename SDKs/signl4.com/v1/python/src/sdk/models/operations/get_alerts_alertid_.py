from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDPathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDRequest:
    path_params: GetAlertsAlertIDPathParams = field(default=None)
    

@dataclass
class GetAlertsAlertIDResponse:
    alert_info: Optional[shared.AlertInfo] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
