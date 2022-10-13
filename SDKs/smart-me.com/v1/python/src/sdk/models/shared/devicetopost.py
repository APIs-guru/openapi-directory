from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceToPostDeviceEnergyTypeEnum(str, Enum):
    METER_TYPE_UNKNOWN = "MeterTypeUnknown"
    METER_TYPE_ELECTRICITY = "MeterTypeElectricity"
    METER_TYPE_WATER = "MeterTypeWater"
    METER_TYPE_GAS = "MeterTypeGas"
    METER_TYPE_HEAT = "MeterTypeHeat"
    METER_TYPE_HCA = "MeterTypeHCA"
    METER_TYPE_ALL_METERS = "MeterTypeAllMeters"
    METER_TYPE_TEMPERATURE = "MeterTypeTemperature"
    METER_TYPE_M_BUS_GATEWAY = "MeterTypeMBusGateway"
    METER_TYPE_RS485_GATEWAY = "MeterTypeRS485Gateway"
    METER_TYPE_CUSTOM_DEVICE = "MeterTypeCustomDevice"
    METER_TYPE_COMPRESSED_AIR = "MeterTypeCompressedAir"
    METER_TYPE_SOLAR_LOG = "MeterTypeSolarLog"
    METER_TYPE_VIRTUAL_METER = "MeterTypeVirtualMeter"
    METER_TYPE_WM_BUS_GATEWAY = "MeterTypeWMBusGateway"

class DeviceToPostMeterSubTypeEnum(str, Enum):
    METER_SUB_TYPE_UNKNOWN = "MeterSubTypeUnknown"
    METER_SUB_TYPE_COLD = "MeterSubTypeCold"
    METER_SUB_TYPE_HEAT = "MeterSubTypeHeat"
    METER_SUB_TYPE_CHARGING_STATION = "MeterSubTypeChargingStation"
    METER_SUB_TYPE_ELECTRICITY = "MeterSubTypeElectricity"
    METER_SUB_TYPE_WATER = "MeterSubTypeWater"
    METER_SUB_TYPE_GAS = "MeterSubTypeGas"
    METER_SUB_TYPE_ELECTRICITY_HEAT = "MeterSubTypeElectricityHeat"
    METER_SUB_TYPE_TEMPERATURE = "MeterSubTypeTemperature"
    METER_SUB_TYPE_VIRTUAL_BATTERY = "MeterSubTypeVirtualBattery"


@dataclass_json
@dataclass
class DeviceToPost:
    active_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivePower' }, 'form': { 'field_name': 'ActivePower' }})
    counter_reading: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReading' }, 'form': { 'field_name': 'CounterReading' }})
    counter_reading_export: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExport' }, 'form': { 'field_name': 'CounterReadingExport' }})
    counter_reading_export_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExportT1' }, 'form': { 'field_name': 'CounterReadingExportT1' }})
    counter_reading_export_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExportT2' }, 'form': { 'field_name': 'CounterReadingExportT2' }})
    counter_reading_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT1' }, 'form': { 'field_name': 'CounterReadingT1' }})
    counter_reading_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT2' }, 'form': { 'field_name': 'CounterReadingT2' }})
    current: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Current' }, 'form': { 'field_name': 'Current' }})
    current_l1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentL1' }, 'form': { 'field_name': 'CurrentL1' }})
    current_l2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentL2' }, 'form': { 'field_name': 'CurrentL2' }})
    current_l3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentL3' }, 'form': { 'field_name': 'CurrentL3' }})
    device_energy_type: Optional[DeviceToPostDeviceEnergyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceEnergyType' }, 'form': { 'field_name': 'DeviceEnergyType' }})
    digital_input1: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalInput1' }, 'form': { 'field_name': 'DigitalInput1' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    meter_sub_type: Optional[DeviceToPostMeterSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeterSubType' }, 'form': { 'field_name': 'MeterSubType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    power_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactor' }, 'form': { 'field_name': 'PowerFactor' }})
    power_factor_l1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactorL1' }, 'form': { 'field_name': 'PowerFactorL1' }})
    power_factor_l2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactorL2' }, 'form': { 'field_name': 'PowerFactorL2' }})
    power_factor_l3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactorL3' }, 'form': { 'field_name': 'PowerFactorL3' }})
    serial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Serial' }, 'form': { 'field_name': 'Serial' }})
    temperature: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Temperature' }, 'form': { 'field_name': 'Temperature' }})
    value_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }, 'form': { 'field_name': 'ValueDate' }})
    voltage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Voltage' }, 'form': { 'field_name': 'Voltage' }})
    voltage_l1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoltageL1' }, 'form': { 'field_name': 'VoltageL1' }})
    voltage_l2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoltageL2' }, 'form': { 'field_name': 'VoltageL2' }})
    voltage_l3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoltageL3' }, 'form': { 'field_name': 'VoltageL3' }})
    
