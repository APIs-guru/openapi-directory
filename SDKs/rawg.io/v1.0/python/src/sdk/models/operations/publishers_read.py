from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishersReadPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishersReadRequest:
    path_params: PublishersReadPathParams = field(default=None)
    

@dataclass
class PublishersReadResponse:
    content_type: str = field(default=None)
    publisher_single: Optional[shared.PublisherSingle] = field(default=None)
    status_code: int = field(default=None)
    
