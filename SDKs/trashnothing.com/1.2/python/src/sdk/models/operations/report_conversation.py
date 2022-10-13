from dataclasses import dataclass, field



@dataclass
class ReportConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReportConversationRequestBody:
    reason: str = field(default=None, metadata={'multipart_form': { 'field_name': 'reason' }})
    

@dataclass
class ReportConversationRequest:
    path_params: ReportConversationPathParams = field(default=None)
    request: ReportConversationRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReportConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
