from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebhooksFetchAllPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksFetchAllSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class WebhooksFetchAllRequest:
    path_params: WebhooksFetchAllPathParams = field(default=None)
    security: WebhooksFetchAllSecurity = field(default=None)
    

@dataclass
class WebhooksFetchAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhooks_response: Optional[shared.WebhooksResponse] = field(default=None)
    
