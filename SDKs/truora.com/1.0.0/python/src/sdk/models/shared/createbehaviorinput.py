from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class CreateBehaviorInput:
    r"""CreateBehaviorInput
    Represents paramaters required to give behavior feedback
    """
    
    birth_date: datetime = field(metadata={'form': { 'field_name': 'birth_date' }})
    country: Any = field(metadata={'form': { 'field_name': 'country' }})
    document_id: str = field(metadata={'form': { 'field_name': 'document_id' }})
    document_type: Any = field(metadata={'form': { 'field_name': 'document_type' }})
    email: str = field(metadata={'form': { 'field_name': 'email' }})
    feedback_date: datetime = field(metadata={'form': { 'field_name': 'feedback_date' }})
    first_name: str = field(metadata={'form': { 'field_name': 'first_name' }})
    last_name: str = field(metadata={'form': { 'field_name': 'last_name' }})
    reason: Any = field(metadata={'form': { 'field_name': 'reason' }})
    phone_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'phone_number' }})
    
