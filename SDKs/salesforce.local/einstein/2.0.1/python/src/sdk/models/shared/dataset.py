from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import labelsummary


@dataclass_json
@dataclass
class Dataset:
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label_summary: Optional[labelsummary.LabelSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelSummary' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    num_of_duplicates: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numOfDuplicates' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    status_msg: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusMsg' }})
    total_examples: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalExamples' }})
    total_labels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalLabels' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
