from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateLocationRequestBody:
    latitude: float = field(metadata={'multipart_form': { 'field_name': 'latitude' }})
    longitude: float = field(metadata={'multipart_form': { 'field_name': 'longitude' }})
    name: str = field(metadata={'multipart_form': { 'field_name': 'name' }})
    radius: float = field(metadata={'multipart_form': { 'field_name': 'radius' }})
    

@dataclass
class UpdateLocationRequest:
    request: UpdateLocationRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UpdateLocationResponse:
    content_type: str = field()
    status_code: int = field()
    current_user: Optional[shared.CurrentUser] = field(default=None)
    
