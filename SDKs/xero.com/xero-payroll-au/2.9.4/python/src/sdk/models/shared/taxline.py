from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import manualtaxtype_enum


@dataclass_json
@dataclass
class TaxLine:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Amount' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    liability_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LiabilityAccount' }})
    manual_tax_type: Optional[manualtaxtype_enum.ManualTaxTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ManualTaxType' }})
    payslip_tax_line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayslipTaxLineID' }})
    tax_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxTypeName' }})
    
