from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayeeLocationResponseData:
    payee_location: PayeeLocation = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_location') }})
    

@dataclass_json
@dataclass
class PayeeLocationResponse:
    data: PayeeLocationResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
