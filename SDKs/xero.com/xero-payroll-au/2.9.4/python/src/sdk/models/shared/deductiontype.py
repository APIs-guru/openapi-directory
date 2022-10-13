from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeductionTypeDeductionCategoryEnum(str, Enum):
    NONE = "NONE"
    UNIONFEES = "UNIONFEES"
    WORKPLACEGIVING = "WORKPLACEGIVING"


@dataclass_json
@dataclass
class DeductionType:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountCode' }})
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentRecord' }})
    deduction_category: Optional[DeductionTypeDeductionCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeductionCategory' }})
    deduction_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeductionTypeID' }})
    is_exempt_from_w1: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsExemptFromW1' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    reduces_super: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReducesSuper' }})
    reduces_tax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReducesTax' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    
