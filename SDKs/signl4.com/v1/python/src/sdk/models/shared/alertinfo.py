from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alertannotationinfo
from . import alertattachment
from . import alerthistoryinfodetailed
from . import eventparameterinfo


@dataclass_json
@dataclass
class AlertInfo:
    annotations: Optional[List[alertannotationinfo.AlertAnnotationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    attachments: Optional[List[alertattachment.AlertAttachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    event_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSourceId' }})
    event_source_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSourceType' }})
    flags: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flags' }})
    history: Optional[alerthistoryinfodetailed.AlertHistoryInfoDetailed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'history' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    parameters: Optional[List[eventparameterinfo.EventParameterInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
