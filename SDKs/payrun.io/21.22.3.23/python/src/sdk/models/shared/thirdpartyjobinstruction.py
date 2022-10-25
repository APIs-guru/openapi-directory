from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ThirdPartyJobInstructionThirdPartyJobInstructionEmployer:
    at_href: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@href' }})
    at_rel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@rel' }})
    at_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@title' }})
    

@dataclass_json
@dataclass
class ThirdPartyJobInstructionThirdPartyJobInstruction:
    client_id_unique_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientIdUniqueKey' }})
    client_secret_unique_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientSecretUniqueKey' }})
    employer: Optional[ThirdPartyJobInstructionThirdPartyJobInstructionEmployer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Employer' }})
    holding_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HoldingDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    instruction_type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstructionTypeName' }})
    pay_schedule_unique_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayScheduleUniqueKey' }})
    payment_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    remote_endpoint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemoteEndpoint' }})
    

@dataclass_json
@dataclass
class ThirdPartyJobInstruction:
    third_party_job_instruction: Optional[ThirdPartyJobInstructionThirdPartyJobInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThirdPartyJobInstruction' }})
    
