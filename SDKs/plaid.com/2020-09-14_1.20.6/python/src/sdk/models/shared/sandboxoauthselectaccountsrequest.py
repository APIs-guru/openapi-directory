from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SandboxOauthSelectAccountsRequest:
    r"""SandboxOauthSelectAccountsRequest
    Defines the request schema for `sandbox/oauth/select_accounts`
    """
    
    accounts: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    oauth_state_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth_state_id') }})
    
