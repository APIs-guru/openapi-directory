from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import webhookeventresource


@dataclass_json
@dataclass
class WebhookEventCallback:
    data: webhookeventresource.WebhookEventResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
