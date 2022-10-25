from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CisLineCisLinePayFrequencyEnum(str, Enum):
    MONTHLY = "Monthly"
    WEEKLY = "Weekly"

class CisLineCisLineTaxTreatmentEnum(str, Enum):
    TAXABLE = "Taxable"
    NON_TAXABLE = "NonTaxable"
    NOTIONAL = "Notional"
    MATERIALS = "Materials"

class CisLineCisLineUomEnum(str, Enum):
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
class CisLineCisLine:
    cis_deduction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CisDeduction' }})
    cis_line_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CisLineType' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Generated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gross_pay: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrossPay' }})
    nominal_code_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NominalCodeKey' }})
    pay_frequency: Optional[CisLineCisLinePayFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayFrequency' }})
    tax_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxMonth' }})
    tax_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxPeriod' }})
    tax_treatment: Optional[CisLineCisLineTaxTreatmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxTreatment' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    uom: Optional[CisLineCisLineUomEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UOM' }})
    unit_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnitRate' }})
    units: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Units' }})
    vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VAT' }})
    

@dataclass_json
@dataclass
class CisLine:
    cis_line: Optional[CisLineCisLine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CisLine' }})
    
