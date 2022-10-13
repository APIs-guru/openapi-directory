from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import superfundtype_enum
from . import validationerror


@dataclass_json
@dataclass
class SuperFund:
    abn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ABN' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountName' }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountNumber' }})
    bsb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BSB' }})
    electronic_service_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ElectronicServiceAddress' }})
    employer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployerNumber' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    spin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SPIN' }})
    super_fund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperFundID' }})
    type: superfundtype_enum.SuperFundTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    usi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USI' }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdatedDateUTC' }})
    validation_errors: Optional[List[validationerror.ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValidationErrors' }})
    
