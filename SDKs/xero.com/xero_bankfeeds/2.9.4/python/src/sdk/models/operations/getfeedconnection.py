from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFeedConnectionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedConnectionHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedConnectionSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFeedConnectionRequest:
    path_params: GetFeedConnectionPathParams = field(default=None)
    headers: GetFeedConnectionHeaders = field(default=None)
    security: GetFeedConnectionSecurity = field(default=None)
    

@dataclass
class GetFeedConnectionResponse:
    content_type: str = field(default=None)
    feed_connection: Optional[shared.FeedConnection] = field(default=None)
    status_code: int = field(default=None)
    
