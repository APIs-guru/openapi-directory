from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceChargingStationStateEnum(str, Enum):
    BOOTING = "Booting"
    READY_NO_CAR_CONNECTED = "ReadyNoCarConnected"
    READY_CAR_CONNECTED = "ReadyCarConnected"
    STARTED_WAIT_FOR_CAR = "StartedWaitForCar"
    CHARGING = "Charging"
    OFFLINE = "Offline"

class DeviceDeviceEnergyTypeEnum(str, Enum):
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

class DeviceFamilyTypeEnum(str, Enum):
    METER_FAMILY_TYPE_UNKNOWN = "MeterFamilyTypeUnknown"
    METER_FAMILY_TYPE_SMART_ME_CONNECT_V1 = "MeterFamilyTypeSmartMeConnectV1"
    METER_FAMILIY_TYPE_SMART_ME_METER = "MeterFamiliyTypeSmartMeMeter"
    METER_FAMILIY_TYPE_SMART_ME_METER_WITH_SWITCH = "MeterFamiliyTypeSmartMeMeterWithSwitch"
    METER_FAMILY_TYPE_M_BUS_GATEWAY_V1 = "MeterFamilyTypeMBusGatewayV1"
    METER_FAMILY_TYPE_RS485_GATEWAY_V1 = "MeterFamilyTypeRS485GatewayV1"
    METER_FAMILY_TYPE_KAMSTRUP_MODULE = "MeterFamilyTypeKamstrupModule"
    METER_FAMILY_TYPE_SMART_ME3_PHASE_METER80_A = "MeterFamilyTypeSmartMe3PhaseMeter80A"
    METER_FAMILY_TYPE_SMART_ME3_PHASE_METER32_A = "MeterFamilyTypeSmartMe3PhaseMeter32A"
    METER_FAMILY_TYPE_SMART_ME3_PHASE_TELSTAR_TRANSFORMER = "MeterFamilyTypeSmartMe3PhaseTelstarTransformer"
    METER_FAMILY_TYPE_LANDIS_GYR_MODULE = "MeterFamilyTypeLandisGyrModule"
    METER_FAMILY_TYPE_FNN_OPTICAL_MODULE = "MeterFamilyTypeFnnOpticalModule"
    METER_FAMILY_TYPE_SMART_ME3_PHASE_TELSTAR80_A_WI_FI = "MeterFamilyTypeSmartMe3PhaseTelstar80AWiFi"
    METER_FAMILY_TYPE_SMART_ME3_PHASE_TELSTAR80_A_MOBILE = "MeterFamilyTypeSmartMe3PhaseTelstar80AMobile"
    METER_FAMILY_TYPE_SMART_ME1_PHASE_METER80_AV2_WI_FI = "MeterFamilyTypeSmartMe1PhaseMeter80AV2WiFi"
    METER_FAMILY_TYPE_SMART_ME1_PHASE_METER32_AV2_WI_FI = "MeterFamilyTypeSmartMe1PhaseMeter32AV2WiFi"
    METER_FAMILY_TYPE_SMART_ME1_PHASE_METER80_A_GPRS = "MeterFamilyTypeSmartMe1PhaseMeter80AGprs"
    METER_FAMILY_TYPE_SMART_ME1_PHASE_METER32_A_GPRS = "MeterFamilyTypeSmartMe1PhaseMeter32AGprs"
    METER_FAMILY_TYPE_WM_BUS_GATEWAY_V1 = "MeterFamilyTypeWMBusGatewayV1"
    METER_FAMILY_TYPE_SMART_ME3_PHASE_TELSTAR_TRANSFORMER_MOBILE = "MeterFamilyTypeSmartMe3PhaseTelstarTransformerMobile"
    METER_FAMILY_TYPE_MITHRAL_HALL_V1 = "MeterFamilyTypeMithralHallV1"
    METER_FAMILY_TYPE_REST_API_METER = "MeterFamilyTypeRestApiMeter"
    METER_FAMILY_TYPE_VIRTUAL_BILLING_METER = "MeterFamilyTypeVirtualBillingMeter"

class DeviceMeterSubTypeEnum(str, Enum):
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
class Device:
    active_power: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivePower' }})
    active_power_l1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivePowerL1' }})
    active_power_l2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivePowerL2' }})
    active_power_l3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivePowerL3' }})
    active_power_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivePowerUnit' }})
    active_tariff: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveTariff' }})
    additional_meter_serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AdditionalMeterSerialNumber' }})
    analog_output1: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalogOutput1' }})
    analog_output2: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnalogOutput2' }})
    charging_station_state: Optional[DeviceChargingStationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChargingStationState' }})
    counter_reading: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReading' }})
    counter_reading_export: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingExport' }})
    counter_reading_import: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingImport' }})
    counter_reading_t1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT1' }})
    counter_reading_t2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT2' }})
    counter_reading_t3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT3' }})
    counter_reading_t4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingT4' }})
    counter_reading_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CounterReadingUnit' }})
    current: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Current' }})
    current_l1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentL1' }})
    current_l2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentL2' }})
    current_l3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentL3' }})
    device_energy_type: Optional[DeviceDeviceEnergyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceEnergyType' }})
    digital_input1: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalInput1' }})
    digital_input2: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalInput2' }})
    digital_output1: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalOutput1' }})
    digital_output2: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalOutput2' }})
    family_type: Optional[DeviceFamilyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FamilyType' }})
    flow_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FlowRate' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    meter_sub_type: Optional[DeviceMeterSubTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MeterSubType' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    power_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactor' }})
    power_factor_l1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactorL1' }})
    power_factor_l2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactorL2' }})
    power_factor_l3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PowerFactorL3' }})
    serial: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Serial' }})
    switch_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SwitchOn' }})
    switch_phase_l1_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SwitchPhaseL1On' }})
    switch_phase_l2_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SwitchPhaseL2On' }})
    switch_phase_l3_on: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SwitchPhaseL3On' }})
    temperature: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Temperature' }})
    value_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ValueDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    voltage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Voltage' }})
    voltage_l1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoltageL1' }})
    voltage_l2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoltageL2' }})
    voltage_l3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VoltageL3' }})
    
