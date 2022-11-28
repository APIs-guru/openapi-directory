from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BudgetSettingsResponseData:
    settings: BudgetSettings = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    

@dataclass_json
@dataclass
class BudgetSettingsResponse:
    data: BudgetSettingsResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
