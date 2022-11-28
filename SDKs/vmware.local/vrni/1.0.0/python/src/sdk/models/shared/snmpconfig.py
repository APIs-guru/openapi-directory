from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SnmpConfigSnmpVersionEnum(str, Enum):
    V2C = "v2c"
    V3 = "v3"


@dataclass_json
@dataclass
class SnmpConfig:
    config_snmp_2c: Optional[Snmp2cConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_snmp_2c') }})
    config_snmp_3: Optional[Snmp3Config] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config_snmp_3') }})
    snmp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp_enabled') }})
    snmp_version: Optional[SnmpConfigSnmpVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snmp_version') }})
    
