from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""PicoChargingData
    Container class for the pico charging station API
    """
    
    active_charging_energy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveChargingEnergy') }})
    active_charging_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveChargingPower') }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Duration') }})
    state: Optional[PicoChargingDataStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    value_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ValueDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
