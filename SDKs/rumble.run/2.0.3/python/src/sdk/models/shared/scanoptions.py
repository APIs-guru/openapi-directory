from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    targets: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    excludes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludes') }})
    max_group_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-group-size') }})
    max_host_rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-host-rate') }})
    max_sockets: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max-sockets') }})
    nameservers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameservers') }})
    passes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passes') }})
    probes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probes') }})
    rate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    scan_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan-description') }})
    scan_frequency: Optional[ScanOptionsScanFrequencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan-frequency') }})
    scan_grace_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan-grace-period') }})
    scan_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan-name') }})
    scan_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan-start') }})
    scan_tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scan-tags') }})
    screenshots: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshots') }})
    tcp_ports: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tcp-ports') }})
    
