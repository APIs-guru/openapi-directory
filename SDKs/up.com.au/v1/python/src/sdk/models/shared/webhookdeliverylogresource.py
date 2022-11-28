from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebhookDeliveryLogResourceAttributesRequest:
    r"""WebhookDeliveryLogResourceAttributesRequest
    Information about the request that was sent to the webhook URL.
    
    """
    
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceAttributesResponse:
    r"""WebhookDeliveryLogResourceAttributesResponse
    Information about the response that was received from the webhook URL.
    
    """
    
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusCode') }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceAttributes:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_status: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryStatus') }})
    request: WebhookDeliveryLogResourceAttributesRequest = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request') }})
    response: WebhookDeliveryLogResourceAttributesResponse = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceRelationshipsWebhookEventData:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceRelationshipsWebhookEvent:
    data: WebhookDeliveryLogResourceRelationshipsWebhookEventData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResourceRelationships:
    webhook_event: WebhookDeliveryLogResourceRelationshipsWebhookEvent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookEvent') }})
    

@dataclass_json
@dataclass
class WebhookDeliveryLogResource:
    r"""WebhookDeliveryLogResource
    Provides historical webhook event delivery information for analysis and
    debugging purposes.
    
    """
    
    attributes: WebhookDeliveryLogResourceAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: WebhookDeliveryLogResourceRelationships = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
