from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    chat_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_service_sid' }})
    filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    method: Optional[shared.ServiceWebhookConfigurationEnumMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    post_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_webhook_url' }})
    pre_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_webhook_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
