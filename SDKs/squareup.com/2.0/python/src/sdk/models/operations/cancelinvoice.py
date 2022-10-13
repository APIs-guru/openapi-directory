from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelInvoicePathParams:
    invoice_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelInvoiceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelInvoiceRequest:
    path_params: CancelInvoicePathParams = field(default=None)
    request: shared.CancelInvoiceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CancelInvoiceSecurity = field(default=None)
    

@dataclass
class CancelInvoiceResponse:
    cancel_invoice_response: Optional[shared.CancelInvoiceResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
