from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class FaxV1FaxDirectionEnum(str, Enum):
    INBOUND = "inbound"
    OUTBOUND = "outbound"

class FaxV1FaxQualityEnum(str, Enum):
    STANDARD = "standard"
    FINE = "fine"
    SUPERFINE = "superfine"

class FaxV1FaxStatusEnum(str, Enum):
    QUEUED = "queued"
    PROCESSING = "processing"
    SENDING = "sending"
    DELIVERED = "delivered"
    RECEIVING = "receiving"
    RECEIVED = "received"
    NO_ANSWER = "no-answer"
    BUSY = "busy"
    FAILED = "failed"
    CANCELED = "canceled"


@dataclass_json
@dataclass
class FaxV1Fax:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: Optional[FaxV1FaxDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    media_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_sid' }})
    media_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_url' }})
    num_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_pages' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    quality: Optional[FaxV1FaxQualityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[FaxV1FaxStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
