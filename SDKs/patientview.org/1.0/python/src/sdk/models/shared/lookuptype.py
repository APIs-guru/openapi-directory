from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[LookupTypeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
