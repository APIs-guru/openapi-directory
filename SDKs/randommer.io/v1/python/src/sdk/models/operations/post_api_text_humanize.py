from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAPITextHumanizeHeaders:
    x_api_key: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostAPITextHumanizeRequests:
    text_dto: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    text_dto1: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_dto2: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    text_dto3: Optional[shared.TextDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostAPITextHumanizeRequest:
    headers: PostAPITextHumanizeHeaders = field(default=None)
    request: PostAPITextHumanizeRequests = field(default=None)
    

@dataclass
class PostAPITextHumanizeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
