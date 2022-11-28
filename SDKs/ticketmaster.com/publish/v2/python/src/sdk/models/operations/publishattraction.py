from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishAttractionHeaders:
    tmps_correlation_id: str = field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishAttractionRequest:
    headers: PublishAttractionHeaders = field()
    request: shared.Attraction = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishAttractionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
