from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewTrustedCommsBrandsInformation:
    file_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_link' }})
    file_link_ttl_in_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_link_ttl_in_seconds' }})
    update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
