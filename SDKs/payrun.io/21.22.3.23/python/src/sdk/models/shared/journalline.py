from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JournalLineJournalLineEmployee:
    r"""JournalLineJournalLineEmployee
    The journal lines' employee
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class JournalLineJournalLinePayFrequencyEnum(str, Enum):
    WEEKLY = "Weekly"
    MONTHLY = "Monthly"
    TWO_WEEKLY = "TwoWeekly"
    FOUR_WEEKLY = "FourWeekly"
    YEARLY = "Yearly"


@dataclass_json
@dataclass
class JournalLineJournalLinePayRun:
    r"""JournalLineJournalLinePayRun
    The journal lines' pay run
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class JournalLineJournalLineSubContractor:
    r"""JournalLineJournalLineSubContractor
    The journal lines' sub contractor
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    

@dataclass_json
@dataclass
class JournalLineJournalLine:
    credit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Credit') }})
    debit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Debit') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    employee: Optional[JournalLineJournalLineEmployee] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Employee') }})
    generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Generated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    grouping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Grouping') }})
    ledger_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LedgerTarget') }})
    nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NomCode') }})
    pay_frequency: Optional[JournalLineJournalLinePayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayFrequency') }})
    pay_run: Optional[JournalLineJournalLinePayRun] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayRun') }})
    sub_contractor: Optional[JournalLineJournalLineSubContractor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubContractor') }})
    sub_nom_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubNomCode') }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxPeriod') }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYear') }})
    

@dataclass_json
@dataclass
class JournalLine:
    journal_line: Optional[JournalLineJournalLine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JournalLine') }})
    
