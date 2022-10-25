from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PreflightInvoiceRecipientResultResultCodeEnum(str, Enum):
    OK = "ok"
    NOK = "nok"


@dataclass_json
@dataclass
class PreflightInvoiceRecipientResult:
    code: Optional[PreflightInvoiceRecipientResultResultCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
