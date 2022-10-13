from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import message_feedback_enum_outcome_enum


@dataclass_json
@dataclass
class APIV2010AccountMessageMessageFeedback:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    message_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_sid' }})
    outcome: Optional[message_feedback_enum_outcome_enum.MessageFeedbackEnumOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
