from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFeedConnectionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedConnectionHeaders:
    xero_tenant_id: str = field(metadata={'header': { 'field_name': 'Xero-Tenant-Id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFeedConnectionSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFeedConnectionRequest:
    headers: GetFeedConnectionHeaders = field()
    path_params: GetFeedConnectionPathParams = field()
    security: GetFeedConnectionSecurity = field()
    

@dataclass
class GetFeedConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    feed_connection: Optional[shared.FeedConnection] = field(default=None)
    
