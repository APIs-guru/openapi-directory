from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDAnnotationsPathParams:
    alert_id: str = field(default=None, metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDAnnotationsRequest:
    path_params: GetAlertsAlertIDAnnotationsPathParams = field(default=None)
    

@dataclass
class GetAlertsAlertIDAnnotationsResponse:
    alert_annotation_infos: Optional[List[shared.AlertAnnotationInfo]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
