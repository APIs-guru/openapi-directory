from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import snmp2cconfig
from . import snmp3config

class SnmpConfigSnmpVersionEnum(str, Enum):
    V2C = "v2c"
    V3 = "v3"


@dataclass_json
@dataclass
class SnmpConfig:
    config_snmp_2c: Optional[snmp2cconfig.Snmp2cConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_snmp_2c' }})
    config_snmp_3: Optional[snmp3config.Snmp3Config] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config_snmp_3' }})
    snmp_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snmp_enabled' }})
    snmp_version: Optional[SnmpConfigSnmpVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snmp_version' }})
    
