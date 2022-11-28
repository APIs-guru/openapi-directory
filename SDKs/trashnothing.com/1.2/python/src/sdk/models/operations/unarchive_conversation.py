from dataclasses import dataclass, field



@dataclass
class UnarchiveConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnarchiveConversationRequest:
    path_params: UnarchiveConversationPathParams = field()
    

@dataclass
class UnarchiveConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
