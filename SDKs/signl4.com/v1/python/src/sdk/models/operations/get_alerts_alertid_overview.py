from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDOverviewPathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDOverviewRequest:
    path_params: GetAlertsAlertIDOverviewPathParams = field()
    

@dataclass
class GetAlertsAlertIDOverviewResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_alert: Optional[shared.OverviewAlert] = field(default=None)
    
