from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PublishInvoicePathParams:
    invoice_id: str = field(default=None, metadata={'path_param': { 'field_name': 'invoice_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PublishInvoiceSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PublishInvoiceRequest:
    path_params: PublishInvoicePathParams = field(default=None)
    request: shared.PublishInvoiceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PublishInvoiceSecurity = field(default=None)
    

@dataclass
class PublishInvoiceResponse:
    content_type: str = field(default=None)
    publish_invoice_response: Optional[shared.PublishInvoiceResponse] = field(default=None)
    status_code: int = field(default=None)
    
