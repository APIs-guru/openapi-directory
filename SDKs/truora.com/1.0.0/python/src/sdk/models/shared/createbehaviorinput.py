from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional


@dataclass
class CreateBehaviorInput:
    birth_date: datetime = field(default=None, metadata={'form': { 'field_name': 'birth_date' }})
    country: Any = field(default=None, metadata={'form': { 'field_name': 'country' }})
    document_id: str = field(default=None, metadata={'form': { 'field_name': 'document_id' }})
    document_type: Any = field(default=None, metadata={'form': { 'field_name': 'document_type' }})
    email: str = field(default=None, metadata={'form': { 'field_name': 'email' }})
    feedback_date: datetime = field(default=None, metadata={'form': { 'field_name': 'feedback_date' }})
    first_name: str = field(default=None, metadata={'form': { 'field_name': 'first_name' }})
    last_name: str = field(default=None, metadata={'form': { 'field_name': 'last_name' }})
    phone_number: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'phone_number' }})
    reason: Any = field(default=None, metadata={'form': { 'field_name': 'reason' }})
    
