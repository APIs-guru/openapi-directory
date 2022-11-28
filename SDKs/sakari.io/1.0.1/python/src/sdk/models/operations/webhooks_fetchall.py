from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebhooksFetchAllPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksFetchAllSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class WebhooksFetchAllRequest:
    path_params: WebhooksFetchAllPathParams = field()
    security: WebhooksFetchAllSecurity = field()
    

@dataclass
class WebhooksFetchAllResponse:
    content_type: str = field()
    status_code: int = field()
    webhooks_response: Optional[shared.WebhooksResponse] = field(default=None)
    
