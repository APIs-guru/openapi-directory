from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetServiceNow:
    asset_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_id') }})
    addresses_extra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses_extra') }})
    addresses_scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses_scope') }})
    alive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alive') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    detected_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detected_by') }})
    domains: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    first_discovered: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_discovered') }})
    hw_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hw_product') }})
    hw_vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hw_vendor') }})
    hw_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hw_version') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address') }})
    last_discovered: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_discovered') }})
    last_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_updated') }})
    lowest_rtt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowest_rtt') }})
    lowest_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowest_ttl') }})
    mac_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_address') }})
    mac_manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_manufacturer') }})
    mac_vendors: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_vendors') }})
    macs: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macs') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    newest_mac_age: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newest_mac_age') }})
    organization: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    os_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_product') }})
    os_vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_vendor') }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    service_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count') }})
    service_count_arp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_arp') }})
    service_count_icmp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_icmp') }})
    service_count_tcp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_tcp') }})
    service_count_udp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_udp') }})
    site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    sys_class_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sys_class_name') }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
