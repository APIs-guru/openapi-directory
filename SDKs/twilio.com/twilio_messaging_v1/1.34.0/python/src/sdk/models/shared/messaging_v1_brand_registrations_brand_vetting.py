from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class MessagingV1BrandRegistrationsBrandVetting:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    brand_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_sid' }})
    brand_vetting_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand_vetting_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    vetting_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vetting_class' }})
    vetting_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vetting_id' }})
    vetting_provider: Optional[shared.BrandVettingEnumVettingProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vetting_provider' }})
    vetting_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vetting_status' }})
    
