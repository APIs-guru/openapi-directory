from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRoadCorridor:
    bounds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bounds' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    envelope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'envelope' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status_aggregation_end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusAggregationEndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_aggregation_start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusAggregationStartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status_severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusSeverity' }})
    status_severity_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusSeverityDescription' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
