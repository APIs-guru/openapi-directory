from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InvoiceDataConversionStrategyEnum(str, Enum):
    UBL = "ubl"
    CII = "cii"
    IDOC = "idoc"


@dataclass_json
@dataclass
class InvoiceData:
    conversion_strategy: Optional[InvoiceDataConversionStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionStrategy' }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    
