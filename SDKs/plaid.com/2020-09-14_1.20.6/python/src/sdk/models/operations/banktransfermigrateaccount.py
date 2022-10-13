from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankTransferMigrateAccountRequest:
    request: shared.BankTransferMigrateAccountRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankTransferMigrateAccountResponse:
    bank_transfer_migrate_account_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
