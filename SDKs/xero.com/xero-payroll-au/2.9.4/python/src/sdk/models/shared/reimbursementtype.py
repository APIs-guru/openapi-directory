from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReimbursementType:
    account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountCode' }})
    current_record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentRecord' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    reimbursement_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReimbursementTypeID' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    
