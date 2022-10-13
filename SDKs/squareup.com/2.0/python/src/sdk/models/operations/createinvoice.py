from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateInvoiceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateInvoiceRequest:
    request: shared.CreateInvoiceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateInvoiceSecurity = field(default=None)
    

@dataclass
class CreateInvoiceResponse:
    content_type: str = field(default=None)
    create_invoice_response: Optional[shared.CreateInvoiceResponse] = field(default=None)
    status_code: int = field(default=None)
    
