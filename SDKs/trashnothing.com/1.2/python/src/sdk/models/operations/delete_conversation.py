from dataclasses import dataclass, field



@dataclass
class DeleteConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationQueryParams:
    message_id: str = field(default=None, metadata={'query_param': { 'field_name': 'message_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteConversationRequest:
    path_params: DeleteConversationPathParams = field(default=None)
    query_params: DeleteConversationQueryParams = field(default=None)
    

@dataclass
class DeleteConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
