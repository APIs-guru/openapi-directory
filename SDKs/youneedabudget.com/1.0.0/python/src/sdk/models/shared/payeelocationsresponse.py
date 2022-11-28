from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayeeLocationsResponseData:
    payee_locations: List[PayeeLocation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_locations') }})
    

@dataclass_json
@dataclass
class PayeeLocationsResponse:
    data: PayeeLocationsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
