from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import configuration_webhook_enum_method_enum
from . import configuration_webhook_enum_target_enum


@dataclass_json
@dataclass
class ConversationsV1ConfigurationConfigurationWebhook:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    method: Optional[configuration_webhook_enum_method_enum.ConfigurationWebhookEnumMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    post_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_webhook_url' }})
    pre_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_webhook_url' }})
    target: Optional[configuration_webhook_enum_target_enum.ConfigurationWebhookEnumTargetEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
