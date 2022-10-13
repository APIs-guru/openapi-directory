from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import recording_add_on_result_enum_status_enum


@dataclass_json
@dataclass
class APIV2010AccountRecordingRecordingAddOnResult:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    add_on_configuration_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_on_configuration_sid' }})
    add_on_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_on_sid' }})
    date_completed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_completed' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    reference_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[recording_add_on_result_enum_status_enum.RecordingAddOnResultEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subresource_uris' }})
    
