from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attachment
from . import invoice
from . import invoicedata
from . import invoicerecipient
from . import routing

class InvoiceSubmissionModeEnum(str, Enum):
    DIRECT = "direct"


@dataclass_json
@dataclass
class InvoiceSubmission:
    attachments: Optional[List[attachment.Attachment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments' }})
    create_primary_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createPrimaryImage' }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentUrl' }})
    idempotency_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotencyGuid' }})
    invoice: Optional[invoice.Invoice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice' }})
    invoice_data: Optional[invoicedata.InvoiceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceData' }})
    invoice_recipient: Optional[invoicerecipient.InvoiceRecipient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoiceRecipient' }})
    legal_entity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legalEntityId' }})
    legal_supplier_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legalSupplierId' }})
    mode: Optional[InvoiceSubmissionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    routing: Optional[routing.Routing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing' }})
    supplier_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplierId' }})
    
