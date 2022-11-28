from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class DocumentInvoiceResponseResponseCodeEnum(str, Enum):
    AB = "AB"
    IP = "IP"
    UQ = "UQ"
    RE = "RE"
    AP = "AP"
    PD = "PD"


@dataclass_json
@dataclass
class DocumentInvoiceResponse:
    r"""DocumentInvoiceResponse
    The invoice response to send.
    """
    
    response_code: DocumentInvoiceResponseResponseCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCode') }})
    clarifications: Optional[List[InvoiceResponseClarification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clarifications') }})
    effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
