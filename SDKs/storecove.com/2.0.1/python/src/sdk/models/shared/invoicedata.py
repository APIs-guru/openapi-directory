from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class InvoiceDataConversionStrategyEnum(str, Enum):
    UBL = "ubl"
    CII = "cii"
    IDOC = "idoc"


@dataclass_json
@dataclass
class InvoiceData:
    r"""InvoiceData
    The invoice to send, in base64 encoded format. Provide either invoice, or invoiceData, but not both.
    """
    
    conversion_strategy: Optional[InvoiceDataConversionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversionStrategy') }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    
