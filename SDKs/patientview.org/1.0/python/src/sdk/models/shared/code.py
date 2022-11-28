from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CodeSourceTypeEnum(str, Enum):
    PATIENTVIEW = "PATIENTVIEW"
    NHS_CHOICES = "NHS_CHOICES"


@dataclass_json
@dataclass
class Code:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    code_categories: Optional[List[CodeCategory]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeCategories') }})
    code_type: Optional[Lookup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codeType') }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayOrder') }})
    external_standards: Optional[List[CodeExternalStandard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalStandards') }})
    full_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullDescription') }})
    hide_from_patients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideFromPatients') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    patient_friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patientFriendlyName') }})
    removed_externally: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedExternally') }})
    source_type: Optional[CodeSourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceType') }})
    standard_type: Optional[Lookup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardType') }})
    
