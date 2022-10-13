from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PicoChargingDataStateEnum(str, Enum):
    BOOTING = "Booting"
    READY_NO_CAR_CONNECTED = "ReadyNoCarConnected"
    READY_CAR_CONNECTED = "ReadyCarConnected"
    STARTED_WAIT_FOR_CAR = "StartedWaitForCar"
    CHARGING = "Charging"
    OFFLINE = "Offline"


@dataclass_json
@dataclass
class PicoChargingData:
    active_charging_energy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveChargingEnergy' }})
    active_charging_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveChargingPower' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Duration' }})
    state: Optional[PicoChargingDataStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    value_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
