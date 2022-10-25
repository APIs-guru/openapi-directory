from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CisTransactionCisTransactionCisMessageTypeEnum(str, Enum):
    VERIFICATION = "Verification"
    RETURN = "Return"


@dataclass_json
@dataclass
class CisTransactionCisTransactionEmployerCore:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    
class CisTransactionCisTransactionTransactionStatusEnum(str, Enum):
    NEW = "New"
    REQUEST_GENERATED = "RequestGenerated"
    COMPLETED_WITH_ERROR = "CompletedWithError"
    COMPLETED_WITH_SUCCESS = "CompletedWithSuccess"
    TIME_OUT = "TimeOut"


@dataclass_json
@dataclass
class CisTransactionCisTransaction:
    cis_message_type: Optional[CisTransactionCisTransactionCisMessageTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CisMessageType' }})
    employer_core: Optional[CisTransactionCisTransactionEmployerCore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EmployerCore' }})
    request_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestData' }})
    response_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseData' }})
    tax_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TaxYear' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_status: Optional[CisTransactionCisTransactionTransactionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransactionStatus' }})
    transmission_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransmissionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass_json
@dataclass
class CisTransaction:
    cis_transaction: Optional[CisTransactionCisTransaction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CisTransaction' }})
    
