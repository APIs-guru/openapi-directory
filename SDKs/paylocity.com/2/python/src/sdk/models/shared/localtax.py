from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LocalTax:
    exemptions: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions' }})
    exemptions2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exemptions2' }})
    filing_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filingStatus' }})
    resident_psd: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residentPSD' }})
    tax_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCode' }})
    work_psd: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workPSD' }})
    
