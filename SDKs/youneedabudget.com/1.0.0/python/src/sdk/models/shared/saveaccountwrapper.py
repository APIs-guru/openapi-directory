from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import saveaccount


@dataclass_json
@dataclass
class SaveAccountWrapper:
    account: saveaccount.SaveAccount = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    
