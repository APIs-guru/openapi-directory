from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PublishExtensionHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id' }})
    

@dataclass
class PublishExtensionRequest:
    headers: PublishExtensionHeaders = field(default=None)
    request: shared.ExtensionData = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishExtensionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
