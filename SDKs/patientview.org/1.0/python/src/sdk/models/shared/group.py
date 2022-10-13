from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import group
from . import contactpoint
from . import groupfeature
from . import lookup
from . import link
from . import location
from . import group


@dataclass_json
@dataclass
class Group:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address3' }})
    child_groups: Optional[List[group.Group]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'childGroups' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    contact_points: Optional[List[contactpoint.ContactPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPoints' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fhir_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fhirResourceId' }})
    group_features: Optional[List[groupfeature.GroupFeature]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupFeatures' }})
    group_type: Optional[lookup.Lookup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupType' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_import_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastImportDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[List[link.Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    locations: Optional[List[location.Location]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_groups: Optional[List[group.Group]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parentGroups' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    sftp_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sftpUser' }})
    short_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortName' }})
    visible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visible' }})
    visible_to_join: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visibleToJoin' }})
    
