from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pagedresultspubliccontinuationtoken


@dataclass_json
@dataclass
class AlertFilterPublic:
    alert_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertIds' }})
    alerts_after_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertsAfterId' }})
    category_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryIds' }})
    continuation_token: Optional[pagedresultspubliccontinuationtoken.PagedResultsPublicContinuationToken] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continuationToken' }})
    max_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    min_creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minCreationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    modified_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiedSince', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    show_personal_hidden_categories: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showPersonalHiddenCategories' }})
    status_codes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCodes' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    text_to_search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textToSearch' }})
    
