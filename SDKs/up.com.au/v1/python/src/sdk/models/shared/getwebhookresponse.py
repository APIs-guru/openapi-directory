from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import webhookresource


@dataclass_json
@dataclass
class GetWebhookResponse:
    data: webhookresource.WebhookResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
