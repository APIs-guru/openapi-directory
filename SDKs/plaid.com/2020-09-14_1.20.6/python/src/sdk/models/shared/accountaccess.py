from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccountAccess:
    r"""AccountAccess
    Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
    """
    
    unique_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unique_id') }})
    authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized') }})
    
