from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GlobalSummary:
    co2_emission: Optional[float] = field(default=None)
    co2_emission_unit: Optional[str] = field(default=None)
    editable: Optional[bool] = field(default=None)
    energy_cost: Optional[float] = field(default=None)
    energy_cost_unit: Optional[str] = field(default=None)
    group_name_filter: Optional[str] = field(default=None)
    heating_margin: Optional[float] = field(default=None)
    heating_margin_coverage: Optional[float] = field(default=None)
    heating_margin_device_name: Optional[str] = field(default=None)
    heating_margin_device_url: Optional[str] = field(default=None)
    heating_margin_unit: Optional[str] = field(default=None)
    id: Optional[str] = field(default=None)
    total_power_consumption: Optional[float] = field(default=None)
    total_power_consumption_unit: Optional[str] = field(default=None)
    update_timestamp: Optional[int] = field(default=None)
    
