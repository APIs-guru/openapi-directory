from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import invoice
from . import documentinvoiceresponse
from . import rawdocumentdata

class SendableDocumentDocumentTypeDocumentTypeEnum(str, Enum):
    INVOICE = "invoice"
    INVOICE_RESPONSE = "invoice_response"


@dataclass_json
@dataclass
class SendableDocument:
    document_type: SendableDocumentDocumentTypeDocumentTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentType' }})
    invoice: Optional[invoice.Invoice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice' }})
    invoice_response: Optional[documentinvoiceresponse.DocumentInvoiceResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceResponse' }})
    raw_document_data: Optional[rawdocumentdata.RawDocumentData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rawDocumentData' }})
    
