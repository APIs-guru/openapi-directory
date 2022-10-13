from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import call_enum_status_enum


@dataclass_json
@dataclass
class APIV2010AccountCall:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    answered_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answered_by' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    caller_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller_name' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time' }})
    forwarded_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forwarded_from' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    from_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_formatted' }})
    group_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_sid' }})
    parent_call_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_call_sid' }})
    phone_number_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number_sid' }})
    price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    price_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_unit' }})
    queue_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queue_time' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time' }})
    status: Optional[call_enum_status_enum.CallEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subresource_uris' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    to_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_formatted' }})
    trunk_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trunk_sid' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
