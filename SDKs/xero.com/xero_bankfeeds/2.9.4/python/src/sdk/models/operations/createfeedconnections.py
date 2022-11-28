from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateFeedConnectionsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFeedConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFeedConnectionsRequest:
    headers: CreateFeedConnectionsHeaders = field()
    request: shared.FeedConnections = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFeedConnectionsSecurity = field()
    

@dataclass
class CreateFeedConnectionsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    feed_connections: Optional[shared.FeedConnections] = field(default=None)
    
