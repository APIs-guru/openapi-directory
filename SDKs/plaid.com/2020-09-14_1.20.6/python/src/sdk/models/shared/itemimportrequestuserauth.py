from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemImportRequestUserAuth:
    r"""ItemImportRequestUserAuth
    Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
    """
    
    auth_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('auth_token') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    
