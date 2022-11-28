from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDPathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDRequest:
    path_params: GetAlertsAlertIDPathParams = field()
    

@dataclass
class GetAlertsAlertIDResponse:
    content_type: str = field()
    status_code: int = field()
    alert_info: Optional[shared.AlertInfo] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
