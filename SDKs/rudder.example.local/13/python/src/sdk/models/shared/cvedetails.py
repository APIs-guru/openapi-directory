from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CveDetailsCvssv2:
    r"""CveDetailsCvssv2
    CVSS V2 of the CVE
    """
    
    base_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseScore') }})
    vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vector') }})
    
class CveDetailsCvssv3BaseSeverityEnum(str, Enum):
    CRITICAL = "critical"
    HIGH = "high"
    MEDIUM = "medium"
    LOW = "low"
    NONE = "none"


@dataclass_json
@dataclass
class CveDetailsCvssv3:
    r"""CveDetailsCvssv3
    CVSS V3 of the CVE
    """
    
    base_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseScore') }})
    base_severity: Optional[CveDetailsCvssv3BaseSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseSeverity') }})
    vector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vector') }})
    

@dataclass_json
@dataclass
class CveDetails:
    cvssv2: Optional[CveDetailsCvssv2] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvssv2') }})
    cvssv3: Optional[CveDetailsCvssv3] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cvssv3') }})
    cwe_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cweIds') }})
    description: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_modified_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    published_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishedDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
