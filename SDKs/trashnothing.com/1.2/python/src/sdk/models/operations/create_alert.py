from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAlertRequestBody:
    search: str = field(metadata={'multipart_form': { 'field_name': 'search' }})
    types: str = field(metadata={'multipart_form': { 'field_name': 'types' }})
    

@dataclass
class CreateAlertRequest:
    request: CreateAlertRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class CreateAlertResponse:
    content_type: str = field()
    status_code: int = field()
    alert: Optional[shared.Alert] = field(default=None)
    
