from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PublishEventHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishEventRequest:
    headers: PublishEventHeaders = field(default=None)
    request: shared.Event = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishEventResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
