from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Asset:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses') }})
    addresses_extra: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addresses_extra') }})
    agent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent_name') }})
    alive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alive') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    created_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    credentials: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credentials') }})
    detected_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detected_by') }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    first_seen: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_seen') }})
    hw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hw') }})
    last_agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_agent_id') }})
    last_seen: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_seen') }})
    last_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_task_id') }})
    lowest_rtt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowest_rtt') }})
    lowest_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowest_ttl') }})
    mac_vendors: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mac_vendors') }})
    macs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('macs') }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    newest_mac: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newest_mac') }})
    newest_mac_age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newest_mac_age') }})
    newest_mac_vendor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newest_mac_vendor') }})
    org_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('org_name') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_id') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os_version') }})
    rtts: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rtts') }})
    service_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count') }})
    service_count_arp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_arp') }})
    service_count_icmp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_icmp') }})
    service_count_tcp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_tcp') }})
    service_count_udp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_count_udp') }})
    service_ports_products: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_ports_products') }})
    service_ports_protocols: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_ports_protocols') }})
    service_ports_tcp: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_ports_tcp') }})
    service_ports_udp: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_ports_udp') }})
    services: Optional[dict[str, dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('services') }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_id') }})
    site_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_name') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    
