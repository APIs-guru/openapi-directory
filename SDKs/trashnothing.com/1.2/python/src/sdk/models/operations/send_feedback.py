from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendFeedbackRequestBody:
    message: str = field(default=None, metadata={'multipart_form': { 'field_name': 'message' }})
    meta: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'meta' }})
    subject: str = field(default=None, metadata={'multipart_form': { 'field_name': 'subject' }})
    

@dataclass
class SendFeedbackRequest:
    request: SendFeedbackRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SendFeedbackResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
