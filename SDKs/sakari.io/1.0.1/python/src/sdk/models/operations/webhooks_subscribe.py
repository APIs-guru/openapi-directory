from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class WebhooksSubscribePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class WebhooksSubscribeRequestBody:
    event_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypes' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass
class WebhooksSubscribeSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class WebhooksSubscribeRequest:
    path_params: WebhooksSubscribePathParams = field(default=None)
    request: WebhooksSubscribeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksSubscribeSecurity = field(default=None)
    

@dataclass
class WebhooksSubscribeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    webhook_response: Optional[shared.WebhookResponse] = field(default=None)
    
