from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuperFundInput:
    type: SuperFundTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    abn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ABN') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountName') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    bsb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BSB') }})
    electronic_service_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElectronicServiceAddress') }})
    employer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployerNumber') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    spin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SPIN') }})
    super_fund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperFundID') }})
    usi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USI') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    

@dataclass_json
@dataclass
class SuperFund:
    type: SuperFundTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    abn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ABN') }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountName') }})
    account_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountNumber') }})
    bsb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BSB') }})
    electronic_service_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ElectronicServiceAddress') }})
    employer_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EmployerNumber') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    spin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SPIN') }})
    super_fund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SuperFundID') }})
    usi: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USI') }})
    updated_date_utc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdatedDateUTC') }})
    validation_errors: Optional[List[ValidationError]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValidationErrors') }})
    
