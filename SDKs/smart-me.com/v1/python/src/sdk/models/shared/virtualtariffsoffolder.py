from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import virtualtariff


@dataclass_json
@dataclass
class VirtualTariffsOfFolder:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    folder_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FolderId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    virtual_tariffs: Optional[List[virtualtariff.VirtualTariff]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VirtualTariffs' }})
    
