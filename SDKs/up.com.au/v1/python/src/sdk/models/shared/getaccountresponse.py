from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import accountresource


@dataclass_json
@dataclass
class GetAccountResponse:
    data: accountresource.AccountResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    
