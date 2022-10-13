from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OsNameEnum(str, Enum):
    DEBIAN = "debian"
    KALI = "kali"
    UBUNTU = "ubuntu"
    REDHAT = "redhat"
    CENTOS = "centos"
    FEDORA = "fedora"
    SUSE = "suse"
    ORACLE = "oracle"
    SCIENTIFIC = "scientific"
    SLACKWARE = "slackware"
    XP = "xp"
    VISTA = "vista"
    SEVEN = "seven"
    TEN = "10"
    TWO_THOUSAND = "2000"
    TWO_THOUSAND_AND_THREE = "2003"
    TWO_THOUSAND_AND_EIGHT_R2 = "2008 r2"
    TWO_THOUSAND_AND_TWELVE = "2012"
    TWO_THOUSAND_AND_TWELVE_R2 = "2012 r2"
    TWO_THOUSAND_AND_SIXTEEN = "2016"

class OsTypeEnum(str, Enum):
    LINUX = "linux"
    WINDOWS = "windows"
    SOLARIS = "solaris"
    AIX = "aix"
    FREEBSD = "freebsd"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class Os:
    full_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullName' }})
    name: OsNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    service_pack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicePack' }})
    type: OsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
