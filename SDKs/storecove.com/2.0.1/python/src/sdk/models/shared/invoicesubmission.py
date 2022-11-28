from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InvoiceSubmissionModeEnum(str, Enum):
    DIRECT = "direct"


@dataclass_json
@dataclass
class InvoiceSubmission:
    r"""InvoiceSubmission
    The invoice you want Storecove to process, with some meta-data.
    """
    
    attachments: Optional[List[Attachment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attachments') }})
    create_primary_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createPrimaryImage') }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    document_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentUrl') }})
    idempotency_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotencyGuid') }})
    invoice: Optional[Invoice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    invoice_data: Optional[InvoiceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceData') }})
    invoice_recipient: Optional[InvoiceRecipient] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceRecipient') }})
    legal_entity_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalEntityId') }})
    legal_supplier_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legalSupplierId') }})
    mode: Optional[InvoiceSubmissionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    routing: Optional[Routing] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing') }})
    supplier_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierId') }})
    
