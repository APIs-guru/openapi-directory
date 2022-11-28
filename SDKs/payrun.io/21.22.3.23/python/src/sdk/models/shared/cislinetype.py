from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CisLineTypeCisLineTypeNominalCode:
    r"""CisLineTypeCisLineTypeNominalCode
    The cis line types' nominal code
    """
    
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@href') }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@rel') }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@title') }})
    
class CisLineTypeCisLineTypeTaxTreatmentEnum(str, Enum):
    TAXABLE = "Taxable"
    NON_TAXABLE = "NonTaxable"
    NOTIONAL = "Notional"
    MATERIALS = "Materials"


@dataclass_json
@dataclass
class CisLineTypeCisLineType:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    line_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineType') }})
    nominal_code: Optional[CisLineTypeCisLineTypeNominalCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NominalCode') }})
    tax_treatment: Optional[CisLineTypeCisLineTypeTaxTreatmentEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TaxTreatment') }})
    

@dataclass_json
@dataclass
class CisLineType:
    cis_line_type: Optional[CisLineTypeCisLineType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CisLineType') }})
    
