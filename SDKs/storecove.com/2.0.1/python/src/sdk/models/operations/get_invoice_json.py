from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetInvoiceJSONPathParams:
    guid: str = field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceJSONQueryParams:
    pmv: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pmv', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInvoiceJSONRequest:
    path_params: GetInvoiceJSONPathParams = field()
    query_params: GetInvoiceJSONQueryParams = field()
    

@dataclass
class GetInvoiceJSONResponse:
    content_type: str = field()
    status_code: int = field()
    purchase_invoice: Optional[Any] = field(default=None)
    
