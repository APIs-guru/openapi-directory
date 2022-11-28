from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDAnnotationsPathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDAnnotationsRequest:
    path_params: GetAlertsAlertIDAnnotationsPathParams = field()
    

@dataclass
class GetAlertsAlertIDAnnotationsResponse:
    content_type: str = field()
    status_code: int = field()
    alert_annotation_infos: Optional[List[shared.AlertAnnotationInfo]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
