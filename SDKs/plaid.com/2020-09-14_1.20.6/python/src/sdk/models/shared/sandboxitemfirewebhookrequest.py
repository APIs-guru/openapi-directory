from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SandboxItemFireWebhookRequestWebhookCodeEnum(str, Enum):
    DEFAULT_UPDATE = "DEFAULT_UPDATE"


@dataclass_json
@dataclass
class SandboxItemFireWebhookRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    webhook_code: SandboxItemFireWebhookRequestWebhookCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_code' }})
    
