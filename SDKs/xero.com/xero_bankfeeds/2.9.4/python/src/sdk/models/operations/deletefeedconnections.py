from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteFeedConnectionsHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFeedConnectionsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFeedConnectionsRequest:
    headers: DeleteFeedConnectionsHeaders = field()
    request: shared.FeedConnections = field(metadata={'request': { 'media_type': 'application/json' }})
    security: DeleteFeedConnectionsSecurity = field()
    

@dataclass
class DeleteFeedConnectionsResponse:
    content_type: str = field()
    status_code: int = field()
    feed_connections: Optional[shared.FeedConnections] = field(default=None)
    
