from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateFeedConnectionsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id' }})
    

@dataclass
class CreateFeedConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateFeedConnectionsRequest:
    headers: CreateFeedConnectionsHeaders = field(default=None)
    request: shared.FeedConnections = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateFeedConnectionsSecurity = field(default=None)
    

@dataclass
class CreateFeedConnectionsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    feed_connections: Optional[shared.FeedConnections] = field(default=None)
    status_code: int = field(default=None)
    
