from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostRenderSecurity:
    developer_key: shared.SchemeDeveloperKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRenderRequest:
    request: shared.Edit = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostRenderSecurity = field()
    

@dataclass
class PostRenderResponse:
    content_type: str = field()
    status_code: int = field()
    queued_response: Optional[shared.QueuedResponse] = field(default=None)
    
