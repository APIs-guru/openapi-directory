from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CveDetailsCvssv2:
    base_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseScore' }})
    vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vector' }})
    
class CveDetailsCvssv3BaseSeverityEnum(str, Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    NONE = "none"


@dataclass_json
@dataclass
class CveDetailsCvssv3:
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseScore' }})
    base_severity: Optional[CveDetailsCvssv3BaseSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseSeverity' }})
    vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vector' }})
    

@dataclass_json
@dataclass
class CveDetails:
    cvssv2: Optional[CveDetailsCvssv2] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvssv2' }})
    cvssv3: Optional[CveDetailsCvssv3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvssv3' }})
    cwe_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cweIds' }})
    description: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    published_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
