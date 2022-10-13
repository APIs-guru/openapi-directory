from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class GetInvoiceUblVersionedPackageVersionEnum(str, Enum):
    ORIGINAL = "original"
    SI11 = "si11"
    SI12 = "si12"
    SI20 = "si20"
    AUNZ = "aunz"
    SG = "sg"

class GetInvoiceUblVersionedPackagingEnum(str, Enum):
    UBL = "ubl"


@dataclass
class GetInvoiceUblVersionedPathParams:
    guid: str = field(default=None, metadata={'path_param': { 'field_name': 'guid', 'style': 'simple', 'explode': False }})
    package_version: GetInvoiceUblVersionedPackageVersionEnum = field(default=None, metadata={'path_param': { 'field_name': 'package_version', 'style': 'simple', 'explode': False }})
    packaging: GetInvoiceUblVersionedPackagingEnum = field(default=None, metadata={'path_param': { 'field_name': 'packaging', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvoiceUblVersionedRequest:
    path_params: GetInvoiceUblVersionedPathParams = field(default=None)
    

@dataclass
class GetInvoiceUblVersionedResponse:
    content_type: str = field(default=None)
    purchase_invoice_ubl: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
