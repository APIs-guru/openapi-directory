from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from . import *


@dataclass
class GroupSummary:
    ambient_temperature: Optional[float] = field(default=None)
    ambient_temperature_unit: Optional[str] = field(default=None)
    co2_emission: Optional[float] = field(default=None)
    co2_emission_unit: Optional[str] = field(default=None)
    cost_unit: Optional[str] = field(default=None)
    device_summaries: Optional[List[DeviceSummary]] = field(default=None)
    editable: Optional[bool] = field(default=None)
    emitted_co2_unit: Optional[str] = field(default=None)
    energy_consumption_unit: Optional[str] = field(default=None)
    energy_cost: Optional[float] = field(default=None)
    energy_cost_unit: Optional[str] = field(default=None)
    heating_margin: Optional[float] = field(default=None)
    heating_margin_coverage: Optional[float] = field(default=None)
    heating_margin_device_name: Optional[str] = field(default=None)
    heating_margin_device_url: Optional[str] = field(default=None)
    heating_margin_unit: Optional[str] = field(default=None)
    history_parent_id_key: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    name: Optional[str] = field(default=None)
    number_of_devices: Optional[int] = field(default=None)
    one_day_confidence: Optional[float] = field(default=None)
    one_day_cost: Optional[float] = field(default=None)
    one_day_emitted_co2: Optional[float] = field(default=None)
    one_day_energy_consumption: Optional[float] = field(default=None)
    one_month_confidence: Optional[float] = field(default=None)
    one_month_cost: Optional[float] = field(default=None)
    one_month_emitted_co2: Optional[float] = field(default=None)
    one_month_energy_consumption: Optional[float] = field(default=None)
    one_year_confidence: Optional[float] = field(default=None)
    one_year_cost: Optional[float] = field(default=None)
    one_year_emitted_co2: Optional[float] = field(default=None)
    one_year_energy_consumption: Optional[float] = field(default=None)
    server_id: Optional[int] = field(default=None)
    total_power_consumption: Optional[float] = field(default=None)
    total_power_consumption_unit: Optional[str] = field(default=None)
    update_timestamp: Optional[int] = field(default=None)
    url: Optional[str] = field(default=None)
    
