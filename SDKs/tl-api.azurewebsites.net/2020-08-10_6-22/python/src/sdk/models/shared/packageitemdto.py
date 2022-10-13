from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PackageItemDto:
    article_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleId' }})
    article_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleName' }})
    article_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articleNumber' }})
    article_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'articlePrice' }})
    end_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOrder' }})
    is_include_service_in_charge: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isIncludeServiceInCharge' }})
    measure_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measureUnit' }})
    number_of_items: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfItems' }})
    start_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startOrder' }})
    
