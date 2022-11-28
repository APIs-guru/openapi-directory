from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SandboxItemFireWebhookRequestWebhookCodeEnum(str, Enum):
    DEFAULT_UPDATE = "DEFAULT_UPDATE"


@dataclass_json
@dataclass
class SandboxItemFireWebhookRequest:
    r"""SandboxItemFireWebhookRequest
    SandboxItemFireWebhookRequest defines the request schema for `/sandbox/item/fire_webhook`
    """
    
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    webhook_code: SandboxItemFireWebhookRequestWebhookCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook_code') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
