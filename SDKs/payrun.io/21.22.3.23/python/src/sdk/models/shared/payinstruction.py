from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PayInstructionPayInstructionPayInstruction:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pay_line_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayLineTag' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class PayInstruction:
    pay_instruction: Optional[PayInstructionPayInstructionPayInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayInstruction' }})
    
