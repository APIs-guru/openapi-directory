from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebhookEventResourceAttributes:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsTransactionData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsTransactionLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsTransaction:
    data: WebhookEventResourceRelationshipsTransactionData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[WebhookEventResourceRelationshipsTransactionLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsWebhookData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsWebhookLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationshipsWebhook:
    data: WebhookEventResourceRelationshipsWebhookData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[WebhookEventResourceRelationshipsWebhookLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class WebhookEventResourceRelationships:
    transaction: Optional[WebhookEventResourceRelationshipsTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction' }})
    webhook: WebhookEventResourceRelationshipsWebhook = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    

@dataclass_json
@dataclass
class WebhookEventResource:
    attributes: WebhookEventResourceAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    relationships: WebhookEventResourceRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
