from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishersReadPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishersReadRequest:
    path_params: PublishersReadPathParams = field()
    

@dataclass
class PublishersReadResponse:
    content_type: str = field()
    status_code: int = field()
    publisher_single: Optional[shared.PublisherSingle] = field(default=None)
    
