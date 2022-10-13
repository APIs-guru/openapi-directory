from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteInvoicePathParams:
    invoice_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteInvoiceQueryParams:
    version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteInvoiceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteInvoiceRequest:
    path_params: DeleteInvoicePathParams = field(default=None)
    query_params: DeleteInvoiceQueryParams = field(default=None)
    security: DeleteInvoiceSecurity = field(default=None)
    

@dataclass
class DeleteInvoiceResponse:
    content_type: str = field(default=None)
    delete_invoice_response: Optional[shared.DeleteInvoiceResponse] = field(default=None)
    status_code: int = field(default=None)
    
