from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class GetInvoiceUblPackagingEnum(str, Enum):
    JSON = "json"
    UBL = "ubl"


@dataclass
class GetInvoiceUblPathParams:
    guid: str = field(metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    packaging: GetInvoiceUblPackagingEnum = field(metadata={'path_param': { 'field_name': 'packaging', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceUblRequest:
    path_params: GetInvoiceUblPathParams = field()
    

@dataclass
class GetInvoiceUblResponse:
    content_type: str = field()
    status_code: int = field()
    purchase_invoice_ubl: Optional[Any] = field(default=None)
    
