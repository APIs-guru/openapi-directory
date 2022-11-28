from dataclasses import dataclass, field



@dataclass
class MarkConversationReadPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MarkConversationReadRequestBody:
    message_id: str = field(metadata={'multipart_form': { 'field_name': 'message_id' }})
    

@dataclass
class MarkConversationReadRequest:
    path_params: MarkConversationReadPathParams = field()
    request: MarkConversationReadRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class MarkConversationReadResponse:
    content_type: str = field()
    status_code: int = field()
    
