from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sandboxpublictokencreaterequestoptionstransactions


@dataclass_json
@dataclass
class SandboxPublicTokenCreateRequestOptions:
    override_password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'override_password' }})
    override_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'override_username' }})
    transactions: Optional[sandboxpublictokencreaterequestoptionstransactions.SandboxPublicTokenCreateRequestOptionsTransactions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
