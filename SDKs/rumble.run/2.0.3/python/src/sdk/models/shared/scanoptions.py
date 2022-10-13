from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ScanOptionsScanFrequencyEnum(str, Enum):
    ONCE = "once"
    HOURLY = "hourly"
    DAILY = "daily"
    WEEKLY = "weekly"
    MONTHLY = "monthly"
    CONTINUOUS = "continuous"


@dataclass_json
@dataclass
class ScanOptions:
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent' }})
    excludes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludes' }})
    max_group_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max-group-size' }})
    max_host_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max-host-rate' }})
    max_sockets: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max-sockets' }})
    nameservers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameservers' }})
    passes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passes' }})
    probes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probes' }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    scan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scan-description' }})
    scan_frequency: Optional[ScanOptionsScanFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scan-frequency' }})
    scan_grace_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scan-grace-period' }})
    scan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scan-name' }})
    scan_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scan-start' }})
    scan_tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scan-tags' }})
    screenshots: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenshots' }})
    targets: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    tcp_ports: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcp-ports' }})
    
