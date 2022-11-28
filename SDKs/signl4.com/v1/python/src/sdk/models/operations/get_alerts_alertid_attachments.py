from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDAttachmentsPathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDAttachmentsRequest:
    path_params: GetAlertsAlertIDAttachmentsPathParams = field()
    

@dataclass
class GetAlertsAlertIDAttachmentsResponse:
    content_type: str = field()
    status_code: int = field()
    alert_attachment_infos: Optional[List[shared.AlertAttachmentInfo]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
