from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import onboardedstatus_2_enum


@dataclass_json
@dataclass
class PayeeDelta2:
    dba_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dbaName' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    onboarded_status: Optional[onboardedstatus_2_enum.OnboardedStatus2Enum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onboardedStatus' }})
    payee_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeCountry' }})
    payee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    remote_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remoteId' }})
    
