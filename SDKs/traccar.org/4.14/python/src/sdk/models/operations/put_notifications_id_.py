from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutNotificationsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutNotificationsIDRequest:
    path_params: PutNotificationsIDPathParams = field()
    request: shared.Notification = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutNotificationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    notification: Optional[shared.Notification] = field(default=None)
    
