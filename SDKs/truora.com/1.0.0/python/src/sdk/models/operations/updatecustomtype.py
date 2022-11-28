from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from sdk.models import shared


@dataclass
class UpdateCustomTypeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateCustomTypeRequest:
    request: shared.CreateConfigInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCustomTypeSecurity = field()
    

@dataclass
class UpdateCustomTypeResponse:
    content_type: str = field()
    status_code: int = field()
    
