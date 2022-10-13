from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OutputConfigurationContainerDigitalOutputNoConnectionActionEnum(str, Enum):
    NOTHING = "Nothing"
    TURN_OFF = "TurnOff"
    TURN_ON = "TurnOn"
    SET_PWM_VALUE = "SetPwmValue"

class OutputConfigurationContainerS0PulseValueEnum(str, Enum):
    PULSE_VALUE1000_KWH = "PulseValue1000Kwh"
    PULSE_VALUE10000_KWH = "PulseValue10000Kwh"

class OutputConfigurationContainerTypeEnum(str, Enum):
    IMPULSE_OUTPUT_ACTIVE_ENERGY = "ImpulseOutputActiveEnergy"
    IMPULSE_OUTPUT_ACTIVE_ENERGY_IMPORT = "ImpulseOutputActiveEnergyImport"
    IMPULSE_OUTPUT_ACTIVE_ENERGY_EXPORT = "ImpulseOutputActiveEnergyExport"
    IMPULSE_OUTPUT_REACTIVE_ENERGY = "ImpulseOutputReactiveEnergy"
    DIGITAL_OUTPUT = "DigitalOutput"
    ANALOG_PWM_SIGNAL_OUTPUT = "AnalogPwmSignalOutput"
    DISABLED = "Disabled"


@dataclass_json
@dataclass
class OutputConfigurationContainer:
    digital_output_no_connection_action: Optional[OutputConfigurationContainerDigitalOutputNoConnectionActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DigitalOutputNoConnectionAction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Number' }})
    s0_pulse_value: Optional[OutputConfigurationContainerS0PulseValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S0PulseValue' }})
    type: Optional[OutputConfigurationContainerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
