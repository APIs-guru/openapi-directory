from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""InvoiceResponseClarification
    A clarification for why a received invoice was rejected (RE) or under query (UQ) and what action to take.
    """
    
    clarification_code: InvoiceResponseClarificationClarificationCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clarificationCode') }})
    clarification_code_type: InvoiceResponseClarificationClarificationCodeTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clarificationCodeType') }})
    clarification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clarification') }})
    
