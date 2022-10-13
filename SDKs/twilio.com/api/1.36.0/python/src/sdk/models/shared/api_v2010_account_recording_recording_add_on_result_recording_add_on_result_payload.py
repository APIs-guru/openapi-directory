from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    add_on_configuration_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_on_configuration_sid' }})
    add_on_result_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_on_result_sid' }})
    add_on_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_on_sid' }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    reference_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    subresource_uris: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subresource_uris' }})
    
