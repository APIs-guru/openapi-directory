from dataclasses import dataclass, field



@dataclass
class UnblockConversationPathParams:
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnblockConversationRequest:
    path_params: UnblockConversationPathParams = field()
    

@dataclass
class UnblockConversationResponse:
    content_type: str = field()
    status_code: int = field()
    
