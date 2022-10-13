from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PublishEntitlementsHeaders:
    tmps_correlation_id: str = field(default=None, metadata={'header': { 'field_name': 'TMPS-Correlation-Id' }})
    

@dataclass
class PublishEntitlementsRequest:
    headers: PublishEntitlementsHeaders = field(default=None)
    request: shared.Entitlement = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PublishEntitlementsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
