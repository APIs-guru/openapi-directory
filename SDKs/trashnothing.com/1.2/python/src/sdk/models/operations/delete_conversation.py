from dataclasses import dataclass, field



@dataclass
class DeleteConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConversationQueryParams:
    message_id: str = field(metadata={'query_param': { 'field_name': 'message_id', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteConversationRequest:
    path_params: DeleteConversationPathParams = field()
    query_params: DeleteConversationQueryParams = field()
    

@dataclass
class DeleteConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
