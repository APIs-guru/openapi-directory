from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import wagesetting


@dataclass_json
@dataclass
class UpdateWageSettingRequest:
    wage_setting: wagesetting.WageSetting = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wage_setting' }})
    
