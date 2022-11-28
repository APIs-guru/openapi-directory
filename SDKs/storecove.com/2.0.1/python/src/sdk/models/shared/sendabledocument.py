from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SendableDocumentDocumentTypeEnum(str, Enum):
    INVOICE = "invoice"
    INVOICE_RESPONSE = "invoice_response"


@dataclass_json
@dataclass
class SendableDocument:
    r"""SendableDocument
    The document to send.
    """
    
    document_type: SendableDocumentDocumentTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentType') }})
    invoice: Optional[Invoice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    invoice_response: Optional[DocumentInvoiceResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceResponse') }})
    raw_document_data: Optional[RawDocumentData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rawDocumentData') }})
    
