from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserAPIGetMessagePathParams:
    message_id: int = field(default=None, metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIGetMessageRequest:
    path_params: UserAPIGetMessagePathParams = field(default=None)
    

@dataclass
class UserAPIGetMessageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_message_contract: Optional[shared.UserMessageContract] = field(default=None)
    
