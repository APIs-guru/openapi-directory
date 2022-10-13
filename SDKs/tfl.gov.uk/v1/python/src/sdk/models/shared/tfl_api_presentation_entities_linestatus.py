from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_disruption
from . import tfl_api_presentation_entities_validityperiod


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineStatus:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disruption: Optional[tfl_api_presentation_entities_disruption.TflAPIPresentationEntitiesDisruption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineId' }})
    modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status_severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusSeverity' }})
    status_severity_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusSeverityDescription' }})
    validity_periods: Optional[List[tfl_api_presentation_entities_validityperiod.TflAPIPresentationEntitiesValidityPeriod]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validityPeriods' }})
    
