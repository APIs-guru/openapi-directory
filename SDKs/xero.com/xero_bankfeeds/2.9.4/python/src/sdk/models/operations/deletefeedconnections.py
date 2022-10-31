from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteFeedConnectionsHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFeedConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFeedConnectionsRequest:
    headers: DeleteFeedConnectionsHeaders = field(default=None)
    request: shared.FeedConnections = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteFeedConnectionsSecurity = field(default=None)
    

@dataclass
class DeleteFeedConnectionsResponse:
    content_type: str = field(default=None)
    feed_connections: Optional[shared.FeedConnections] = field(default=None)
    status_code: int = field(default=None)
    
