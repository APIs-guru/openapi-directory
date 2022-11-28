from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SandboxPublicTokenCreateRequestOptions:
    r"""SandboxPublicTokenCreateRequestOptions
    An optional set of options to be used when configuring the Item. If specified, must not be `null`.
    """
    
    override_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('override_password') }})
    override_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('override_username') }})
    transactions: Optional[SandboxPublicTokenCreateRequestOptionsTransactions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
