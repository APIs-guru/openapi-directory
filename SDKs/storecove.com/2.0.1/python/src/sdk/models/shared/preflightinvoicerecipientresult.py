from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PreflightInvoiceRecipientResultCodeResultCodeEnum(str, Enum):
    OK = "ok"
    NOK = "nok"


@dataclass_json
@dataclass
class PreflightInvoiceRecipientResult:
    code: Optional[PreflightInvoiceRecipientResultCodeResultCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    
