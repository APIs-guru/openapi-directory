from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetInvoicePathParams:
    invoice_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetInvoiceRequest:
    path_params: GetInvoicePathParams = field(default=None)
    security: GetInvoiceSecurity = field(default=None)
    

@dataclass
class GetInvoiceResponse:
    content_type: str = field(default=None)
    get_invoice_response: Optional[shared.GetInvoiceResponse] = field(default=None)
    status_code: int = field(default=None)
    
