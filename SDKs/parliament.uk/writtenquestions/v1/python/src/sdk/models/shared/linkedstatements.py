from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import statementlinktypeenum_enum


@dataclass_json
@dataclass
class LinkedStatements:
    link_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    link_type: Optional[statementlinktypeenum_enum.StatementLinkTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkType' }})
    linked_statement_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkedStatementId' }})
    
