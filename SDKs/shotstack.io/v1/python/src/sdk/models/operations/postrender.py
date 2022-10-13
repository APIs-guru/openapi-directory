from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRenderSecurity:
    developer_key: shared.SchemeDeveloperKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRenderRequest:
    request: shared.Edit = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostRenderSecurity = field(default=None)
    

@dataclass
class PostRenderResponse:
    content_type: str = field(default=None)
    queued_response: Optional[shared.QueuedResponse] = field(default=None)
    status_code: int = field(default=None)
    
