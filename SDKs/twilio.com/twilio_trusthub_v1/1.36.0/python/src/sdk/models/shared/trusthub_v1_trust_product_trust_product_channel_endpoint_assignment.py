from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrusthubV1TrustProductTrustProductChannelEndpointAssignment:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    channel_endpoint_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_endpoint_sid' }})
    channel_endpoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_endpoint_type' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    trust_product_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trust_product_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
