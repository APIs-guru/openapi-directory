from dataclasses import dataclass, field



@dataclass
class ReportConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReportConversationRequestBody:
    reason: str = field(metadata={'multipart_form': { 'field_name': 'reason' }})
    

@dataclass
class ReportConversationRequest:
    path_params: ReportConversationPathParams = field()
    request: ReportConversationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class ReportConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
