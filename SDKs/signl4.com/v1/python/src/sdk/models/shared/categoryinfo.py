from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import categoryaugmentation


@dataclass_json
@dataclass
class CategoryInfo:
    augmentations: Optional[List[categoryaugmentation.CategoryAugmentation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'augmentations' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    image_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageName' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    keyword_matching: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywordMatching' }})
    keywords: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywords' }})
    last_match: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMatch', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    options: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    
