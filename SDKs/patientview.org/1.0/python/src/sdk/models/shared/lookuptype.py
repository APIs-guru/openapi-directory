from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LookupTypeTypeEnum(str, Enum):
    GROUP = "GROUP"
    MENU = "MENU"
    ROLE = "ROLE"
    CODE_STANDARD = "CODE_STANDARD"
    CODE_TYPE = "CODE_TYPE"
    FEATURE_TYPE = "FEATURE_TYPE"
    RELATIONSHIP_TYPE = "RELATIONSHIP_TYPE"
    IDENTIFIER = "IDENTIFIER"
    CONTACT_POINT_TYPE = "CONTACT_POINT_TYPE"
    STATISTIC_TYPE = "STATISTIC_TYPE"
    NEWS_TYPE = "NEWS_TYPE"
    GENDER = "GENDER"
    IBD_CROHNSLOCATION = "IBD_CROHNSLOCATION"
    IBD_CROHNSPROXIMALTERMINALILEUM = "IBD_CROHNSPROXIMALTERMINALILEUM"
    IBD_CROHNSPERIANAL = "IBD_CROHNSPERIANAL"
    IBD_CROHNSBEHAVIOUR = "IBD_CROHNSBEHAVIOUR"
    IBD_UCEXTENT = "IBD_UCEXTENT"
    IBD_EGIMCOMPLICATION = "IBD_EGIMCOMPLICATION"
    IBD_SURGERYMAINPROCEDURE = "IBD_SURGERYMAINPROCEDURE"
    IBD_SMOKINGSTATUS = "IBD_SMOKINGSTATUS"
    IBD_FAMILYHISTORY = "IBD_FAMILYHISTORY"
    LINK_TYPE = "LINK_TYPE"


@dataclass_json
@dataclass
class LookupType:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[LookupTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
