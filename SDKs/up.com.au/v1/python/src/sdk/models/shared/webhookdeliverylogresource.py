from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebhookDeliveryLogResourceAttributesRequest:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceAttributesResponse:
    body: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceAttributes:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_status: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryStatus' }})
    request: WebhookDeliveryLogResourceAttributesRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request' }})
    response: WebhookDeliveryLogResourceAttributesResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response' }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceRelationshipsWebhookEventData:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceRelationshipsWebhookEvent:
    data: WebhookDeliveryLogResourceRelationshipsWebhookEventData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceRelationships:
    webhook_event: WebhookDeliveryLogResourceRelationshipsWebhookEvent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookEvent' }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResource:
    attributes: WebhookDeliveryLogResourceAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    relationships: WebhookDeliveryLogResourceRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
