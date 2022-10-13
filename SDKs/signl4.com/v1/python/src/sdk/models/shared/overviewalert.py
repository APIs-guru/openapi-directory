from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alertdeliverystatusinfo
from . import alertannotationinfo
from . import alerthistoryinfodetailed


@dataclass_json
@dataclass
class OverviewAlert:
    alert_delivery_status: Optional[alertdeliverystatusinfo.AlertDeliveryStatusInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertDeliveryStatus' }})
    annotations: Optional[List[alertannotationinfo.AlertAnnotationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    history_detailed: Optional[alerthistoryinfodetailed.AlertHistoryInfoDetailed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyDetailed' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    required_acknowledgements: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requiredAcknowledgements' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
