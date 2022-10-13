from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class GetInvoiceUblPackagingEnum(str, Enum):
    JSON = "json"
    UBL = "ubl"


@dataclass
class GetInvoiceUblPathParams:
    guid: str = field(default=None, metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    packaging: GetInvoiceUblPackagingEnum = field(default=None, metadata={'path_param': { 'field_name': 'packaging', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceUblRequest:
    path_params: GetInvoiceUblPathParams = field(default=None)
    

@dataclass
class GetInvoiceUblResponse:
    content_type: str = field(default=None)
    purchase_invoice_ubl: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
