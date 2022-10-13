from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import webhookdeliverylogresource


@dataclass_json
@dataclass
class ListWebhookDeliveryLogsResponseLinks:
    next: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListWebhookDeliveryLogsResponse:
    data: List[webhookdeliverylogresource.WebhookDeliveryLogResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: ListWebhookDeliveryLogsResponseLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    
