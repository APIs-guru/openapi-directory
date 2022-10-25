from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class JournalLineJournalLineEmployee:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    
class JournalLineJournalLinePayFrequencyEnum(str, Enum):
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    TWO_WEEKLY = "TwoWeekly"
    FOUR_WEEKLY = "FourWeekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class JournalLineJournalLinePayRun:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class JournalLineJournalLineSubContractor:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class JournalLineJournalLine:
    credit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Credit' }})
    debit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Debit' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    employee: Optional[JournalLineJournalLineEmployee] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employee' }})
    generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Generated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grouping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Grouping' }})
    ledger_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LedgerTarget' }})
    nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NomCode' }})
    pay_frequency: Optional[JournalLineJournalLinePayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayFrequency' }})
    pay_run: Optional[JournalLineJournalLinePayRun] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRun' }})
    sub_contractor: Optional[JournalLineJournalLineSubContractor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubContractor' }})
    sub_nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubNomCode' }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPeriod' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    

@dataclass_json
@dataclass
class JournalLine:
    journal_line: Optional[JournalLineJournalLine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JournalLine' }})
    
