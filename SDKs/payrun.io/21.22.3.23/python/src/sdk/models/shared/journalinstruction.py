from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"


@dataclass_json
@dataclass
class JournalInstructionJournalInstructionJournalInstruction:
    accounting_type: Optional[JournalInstructionJournalInstructionAccountingTypeAccountingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountingType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Expression' }})
    journal_line_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JournalLineTag' }})
    ledger_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LedgerTarget' }})
    nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NomCode' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubNomCode' }})
    

@dataclass_json
@dataclass
class JournalInstruction:
    journal_instruction: Optional[JournalInstructionJournalInstructionJournalInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JournalInstruction' }})
    
