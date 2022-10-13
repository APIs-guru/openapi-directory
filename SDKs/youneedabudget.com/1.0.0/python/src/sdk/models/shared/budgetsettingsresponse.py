from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import budgetsettings


@dataclass_json
@dataclass
class BudgetSettingsResponseData:
    settings: budgetsettings.BudgetSettings = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    

@dataclass_json
@dataclass
class BudgetSettingsResponse:
    data: BudgetSettingsResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
