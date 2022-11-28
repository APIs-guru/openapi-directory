from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PreflightInvoiceRecipientResultResultCodeEnum(str, Enum):
    OK = "ok"
    NOK = "nok"


@dataclass_json
@dataclass
class PreflightInvoiceRecipientResult:
    r"""PreflightInvoiceRecipientResult
    The result of preflighting an invoice recipient
    """
    
    code: Optional[PreflightInvoiceRecipientResultResultCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    
