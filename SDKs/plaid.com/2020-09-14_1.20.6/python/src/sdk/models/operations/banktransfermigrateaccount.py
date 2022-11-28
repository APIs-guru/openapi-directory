from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BankTransferMigrateAccountRequest:
    request: shared.BankTransferMigrateAccountRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BankTransferMigrateAccountResponse:
    content_type: str = field()
    status_code: int = field()
    bank_transfer_migrate_account_response: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
