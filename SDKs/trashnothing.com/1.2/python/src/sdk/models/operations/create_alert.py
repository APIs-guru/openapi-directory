from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateAlertRequestBody:
    search: str = field(default=None, metadata={'multipart_form': { 'field_name': 'search' }})
    types: str = field(default=None, metadata={'multipart_form': { 'field_name': 'types' }})
    

@dataclass
class CreateAlertRequest:
    request: CreateAlertRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class CreateAlertResponse:
    alert: Optional[shared.Alert] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
