from dataclasses import dataclass, field



@dataclass
class MarkConversationReadPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MarkConversationReadRequestBody:
    message_id: str = field(default=None, metadata={'multipart_form': { 'field_name': 'message_id' }})
    

@dataclass
class MarkConversationReadRequest:
    path_params: MarkConversationReadPathParams = field(default=None)
    request: MarkConversationReadRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class MarkConversationReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
