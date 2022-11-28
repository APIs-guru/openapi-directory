from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LinkedStatements:
    link_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    link_type: Optional[StatementLinkTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkType') }})
    linked_statement_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedStatementId') }})
    
