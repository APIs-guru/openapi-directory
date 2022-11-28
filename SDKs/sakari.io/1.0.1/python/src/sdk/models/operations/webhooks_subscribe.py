from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class WebhooksSubscribePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class WebhooksSubscribeRequestBody:
    event_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypes') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass
class WebhooksSubscribeSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class WebhooksSubscribeRequest:
    path_params: WebhooksSubscribePathParams = field()
    request: WebhooksSubscribeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksSubscribeSecurity = field()
    

@dataclass
class WebhooksSubscribeResponse:
    content_type: str = field()
    status_code: int = field()
    webhook_response: Optional[shared.WebhookResponse] = field(default=None)
    
