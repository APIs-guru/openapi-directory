from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import invoiceresponseclarification

class DocumentInvoiceResponseResponseCodeResponseCodeEnum(str, Enum):
    AB = "AB"
    IP = "IP"
    UQ = "UQ"
    RE = "RE"
    AP = "AP"
    PD = "PD"


@dataclass_json
@dataclass
class DocumentInvoiceResponse:
    clarifications: Optional[List[invoiceresponseclarification.InvoiceResponseClarification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clarifications' }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    response_code: DocumentInvoiceResponseResponseCodeResponseCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCode' }})
    
