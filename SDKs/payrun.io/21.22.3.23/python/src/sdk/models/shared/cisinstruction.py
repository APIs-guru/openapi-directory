from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CisInstructionCisInstructionPayFrequencyEnum(str, Enum):
    MONTHLY = "Monthly"
    WEEKLY = "Weekly"

class CisInstructionCisInstructionUomEnum(str, Enum):
    NOT_SET = "NotSet"
    MINUTE = "Minute"
    HOUR = "Hour"
    DAY = "Day"
    WEEK = "Week"
    MONTH = "Month"
    YEAR = "Year"
    UNIT = "Unit"


@dataclass_json
@dataclass
class CisInstructionCisInstruction:
    cis_line_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisLineTag') }})
    cis_line_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisLineType') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    pay_frequency: Optional[CisInstructionCisInstructionPayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PayFrequency') }})
    period_end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodEnd') }})
    period_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PeriodStart') }})
    tax_year_end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYearEnd') }})
    tax_year_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxYearStart') }})
    uom: Optional[CisInstructionCisInstructionUomEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UOM') }})
    units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Units') }})
    vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VAT') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    

@dataclass_json
@dataclass
class CisInstruction:
    cis_instruction: Optional[CisInstructionCisInstruction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisInstruction') }})
    
