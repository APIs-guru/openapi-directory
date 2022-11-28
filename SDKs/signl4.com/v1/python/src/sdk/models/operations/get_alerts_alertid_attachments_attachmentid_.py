from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDPathParams:
    alert_id: str = field(metadata={'path_param': { 'field_name': 'alertId', 'style': 'simple', 'explode': False }})
    attachment_id: str = field(metadata={'path_param': { 'field_name': 'attachmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    scale: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'scale', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDRequest:
    path_params: GetAlertsAlertIDAttachmentsAttachmentIDPathParams = field()
    query_params: GetAlertsAlertIDAttachmentsAttachmentIDQueryParams = field()
    

@dataclass
class GetAlertsAlertIDAttachmentsAttachmentIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    get_alerts_alert_id_attachments_attachment_id_200_application_json_binary_string: Optional[bytes] = field(default=None)
    get_alerts_alert_id_attachments_attachment_id_200_text_json_binary_string: Optional[bytes] = field(default=None)
    get_alerts_alert_id_attachments_attachment_id_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    
