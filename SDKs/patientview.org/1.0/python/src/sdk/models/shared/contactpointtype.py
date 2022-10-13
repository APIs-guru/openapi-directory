from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import lookuptype

class ContactPointTypeValueEnum(str, Enum):
    UNIT_WEB_ADDRESS = "UNIT_WEB_ADDRESS"
    TRUST_WEB_ADDRESS = "TRUST_WEB_ADDRESS"
    PV_ADMIN_NAME = "PV_ADMIN_NAME"
    PV_ADMIN_PHONE = "PV_ADMIN_PHONE"
    PV_ADMIN_EMAIL = "PV_ADMIN_EMAIL"
    UNIT_ENQUIRIES_PHONE = "UNIT_ENQUIRIES_PHONE"
    UNIT_ENQUIRIES_EMAIL = "UNIT_ENQUIRIES_EMAIL"
    APPOINTMENT_PHONE = "APPOINTMENT_PHONE"
    APPOINTMENT_EMAIL = "APPOINTMENT_EMAIL"
    OUT_OF_HOURS_INFO = "OUT_OF_HOURS_INFO"


@dataclass_json
@dataclass
class ContactPointType:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lookup_type: Optional[lookuptype.LookupType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookupType' }})
    value: Optional[ContactPointTypeValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
