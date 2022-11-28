from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class JournalInstructionJournalInstructionAccountingTypeEnum(str, Enum):
    CREDIT = "Credit"
    DEBIT = "Debit"


@dataclass_json
@dataclass
class JournalInstructionJournalInstruction:
    accounting_type: Optional[JournalInstructionJournalInstructionAccountingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountingType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Expression') }})
    journal_line_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JournalLineTag') }})
    ledger_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LedgerTarget') }})
    nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NomCode') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sub_nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubNomCode') }})
    

@dataclass_json
@dataclass
class JournalInstruction:
    journal_instruction: Optional[JournalInstructionJournalInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JournalInstruction') }})
    
