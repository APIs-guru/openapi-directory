from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WirelessV1SimDataSession:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    cell_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cell_id' }})
    cell_location_estimate: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cell_location_estimate' }})
    end: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imei' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    operator_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator_country' }})
    operator_mcc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator_mcc' }})
    operator_mnc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator_mnc' }})
    operator_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator_name' }})
    packets_downloaded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packets_downloaded' }})
    packets_uploaded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'packets_uploaded' }})
    radio_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radio_link' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_sid' }})
    start: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
