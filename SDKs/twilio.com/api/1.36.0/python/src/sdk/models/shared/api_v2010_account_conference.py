from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import conference_enum_reason_conference_ended_enum
from . import conference_enum_status_enum


@dataclass_json
@dataclass
class APIV2010AccountConference:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    call_sid_ending_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_sid_ending_conference' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    reason_conference_ended: Optional[conference_enum_reason_conference_ended_enum.ConferenceEnumReasonConferenceEndedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason_conference_ended' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[conference_enum_status_enum.ConferenceEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subresource_uris' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
