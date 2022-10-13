from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ShareFileResponseData:
    expires: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    

@dataclass_json
@dataclass
class ShareFileResponse:
    data: Optional[ShareFileResponseData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
