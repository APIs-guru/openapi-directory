from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDOverviewPathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDOverviewRequest:
    path_params: GetAlertsAlertIDOverviewPathParams = field(default=None)
    

@dataclass
class GetAlertsAlertIDOverviewResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    overview_alert: Optional[shared.OverviewAlert] = field(default=None)
    status_code: int = field(default=None)
    
