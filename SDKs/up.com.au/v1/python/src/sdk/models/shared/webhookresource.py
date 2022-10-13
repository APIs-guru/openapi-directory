from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebhookResourceAttributes:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    secret_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretKey' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class WebhookResourceLinks:
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class WebhookResourceRelationshipsLogsLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class WebhookResourceRelationshipsLogs:
    links: Optional[WebhookResourceRelationshipsLogsLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class WebhookResourceRelationships:
    logs: WebhookResourceRelationshipsLogs = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    

@dataclass_json
@dataclass
class WebhookResource:
    attributes: WebhookResourceAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[WebhookResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: WebhookResourceRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
