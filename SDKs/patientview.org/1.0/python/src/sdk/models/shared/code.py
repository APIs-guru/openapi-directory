from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import codecategory
from . import lookup
from . import codeexternalstandard
from . import link
from . import lookup

class CodeSourceTypeEnum(str, Enum):
    PATIENTVIEW = "PATIENTVIEW"
    NHS_CHOICES = "NHS_CHOICES"


@dataclass_json
@dataclass
class Code:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    code_categories: Optional[List[codecategory.CodeCategory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeCategories' }})
    code_type: Optional[lookup.Lookup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codeType' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayOrder' }})
    external_standards: Optional[List[codeexternalstandard.CodeExternalStandard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalStandards' }})
    full_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullDescription' }})
    hide_from_patients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideFromPatients' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    patient_friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patientFriendlyName' }})
    removed_externally: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedExternally' }})
    source_type: Optional[CodeSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceType' }})
    standard_type: Optional[lookup.Lookup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardType' }})
    
