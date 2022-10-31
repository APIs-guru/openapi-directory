from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PublishAttractionHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishAttractionRequest:
    headers: PublishAttractionHeaders = field(default=None)
    request: shared.Attraction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishAttractionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
