from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishExtensionHeaders:
    tmps_correlation_id: str = field(metadata={'header': { 'field_name': 'TMPS-Correlation-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishExtensionRequest:
    headers: PublishExtensionHeaders = field()
    request: shared.ExtensionData = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishExtensionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
