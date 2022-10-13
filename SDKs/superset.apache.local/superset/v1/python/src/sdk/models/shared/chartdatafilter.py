from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class ChartDataFilterOpEnum(str, Enum):
    EQUAL_EQUAL_ = "=="
    NOT_EQUAL_ = "!="
    GREATER_THAN_ = ">"
    LESS_THAN_ = "<"
    GREATER_THAN_EQUAL_ = ">="
    LESS_THAN_EQUAL_ = "<="
    LIKE = "LIKE"
    ILIKE = "ILIKE"
    IS_NULL = "IS NULL"
    IS_NOT_NULL = "IS NOT NULL"
    IN = "IN"
    NOT_IN = "NOT IN"
    REGEX = "REGEX"
    IS_TRUE = "IS TRUE"
    IS_FALSE = "IS FALSE"


@dataclass_json
@dataclass
class ChartDataFilter:
    col: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'col' }})
    op: ChartDataFilterOpEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'op' }})
    val: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'val' }})
    
