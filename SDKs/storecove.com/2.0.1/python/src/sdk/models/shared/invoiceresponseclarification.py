from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InvoiceResponseClarificationClarificationCodeEnum(str, Enum):
    REF = "REF"
    LEG = "LEG"
    REC = "REC"
    QUA = "QUA"
    DEL = "DEL"
    PRI = "PRI"
    QTY = "QTY"
    ITM = "ITM"
    PAY = "PAY"
    UNR = "UNR"
    FIN = "FIN"
    OTH = "OTH"
    PIN = "PIN"
    NIN = "NIN"
    CNF = "CNF"
    CNP = "CNP"
    CNA = "CNA"

class InvoiceResponseClarificationClarificationCodeTypeEnum(str, Enum):
    OP_STATUS_REASON = "OPStatusReason"
    OP_STATUS_ACTION = "OPStatusAction"


@dataclass_json
@dataclass
class InvoiceResponseClarification:
    clarification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clarification' }})
    clarification_code: InvoiceResponseClarificationClarificationCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clarificationCode' }})
    clarification_code_type: InvoiceResponseClarificationClarificationCodeTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clarificationCodeType' }})
    
