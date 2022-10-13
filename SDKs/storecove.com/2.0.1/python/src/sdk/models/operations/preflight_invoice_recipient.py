from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PreflightInvoiceRecipientRequest:
    request: shared.InvoiceRecipientPreflight = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PreflightInvoiceRecipientResponse:
    content_type: str = field(default=None)
    error_models: Optional[List[Any]] = field(default=None)
    preflight_invoice_recipient_result: Optional[shared.PreflightInvoiceRecipientResult] = field(default=None)
    status_code: int = field(default=None)
    
