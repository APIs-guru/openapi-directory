from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateInvoicePathParams:
    invoice_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInvoiceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateInvoiceRequest:
    path_params: UpdateInvoicePathParams = field(default=None)
    request: shared.UpdateInvoiceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateInvoiceSecurity = field(default=None)
    

@dataclass
class UpdateInvoiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_invoice_response: Optional[shared.UpdateInvoiceResponse] = field(default=None)
    
