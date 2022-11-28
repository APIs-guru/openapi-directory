from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ArticleSearchDto:
    r"""ArticleSearchDto
    The ArticleSearchDTO Class.
    Contains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.
                
    """
    
    active_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeStatus') }})
    apply_for_all_gyms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyForAllGyms') }})
    article_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('articleId') }})
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdUser') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    measure_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measureUnit') }})
    modified_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiedUser') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    selling_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sellingPrice') }})
    tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCount') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
