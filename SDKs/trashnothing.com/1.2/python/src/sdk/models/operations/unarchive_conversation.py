from dataclasses import dataclass, field



@dataclass
class UnarchiveConversationPathParams:
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnarchiveConversationRequest:
    path_params: UnarchiveConversationPathParams = field(default=None)
    

@dataclass
class UnarchiveConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
