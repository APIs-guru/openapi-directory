from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import webhookresource


@dataclass_json
@dataclass
class ListWebhooksResponseLinks:
    next: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    prev: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prev' }})
    

@dataclass_json
@dataclass
class ListWebhooksResponse:
    data: List[webhookresource.WebhookResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: ListWebhooksResponseLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    
