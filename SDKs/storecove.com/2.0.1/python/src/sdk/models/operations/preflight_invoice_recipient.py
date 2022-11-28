from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PreflightInvoiceRecipientRequest:
    request: shared.InvoiceRecipientPreflight = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PreflightInvoiceRecipientResponse:
    content_type: str = field()
    status_code: int = field()
    error_models: Optional[List[Any]] = field(default=None)
    preflight_invoice_recipient_result: Optional[shared.PreflightInvoiceRecipientResult] = field(default=None)
    
