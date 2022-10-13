from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import annotationlayer
from . import chartdatafilter
from . import chartdatafilter
from . import chartdatafilter

class ChartDataQueryObjectDatasourceTypeEnum(str, Enum):
    DRUID = "druid"
    TABLE = "table"


@dataclass_json
@dataclass
class ChartDataQueryObjectDatasource:
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[ChartDataQueryObjectDatasourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class ChartDataQueryObjectExtrasRelativeEndEnum(str, Enum):
    TODAY = "today"
    NOW = "now"

class ChartDataQueryObjectExtrasRelativeStartEnum(str, Enum):
    TODAY = "today"
    NOW = "now"

class ChartDataQueryObjectExtrasTimeGrainSqlaEnum(str, Enum):
    PT1_S = "PT1S"
    PT5_S = "PT5S"
    PT30_S = "PT30S"
    PT1_M = "PT1M"
    PT5_M = "PT5M"
    PT10_M = "PT10M"
    PT15_M = "PT15M"
    PT0_5_H = "PT0.5H"
    PT1_H = "PT1H"
    PT6_H = "PT6H"
    P1_D = "P1D"
    P1_W = "P1W"
    P1_M = "P1M"
    P0_25_Y = "P0.25Y"
    P1_Y = "P1Y"
    ONE_THOUSAND_NINE_HUNDRED_AND_SIXTY_NINE_12_28_T00_00_00_Z_P1_W = "1969-12-28T00:00:00Z/P1W"
    ONE_THOUSAND_NINE_HUNDRED_AND_SIXTY_NINE_12_29_T00_00_00_Z_P1_W = "1969-12-29T00:00:00Z/P1W"
    P1_W_1970_01_03_T00_00_00_Z = "P1W/1970-01-03T00:00:00Z"
    P1_W_1970_01_04_T00_00_00_Z = "P1W/1970-01-04T00:00:00Z"


@dataclass_json
@dataclass
class ChartDataQueryObjectExtras:
    druid_time_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'druid_time_origin' }})
    having: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'having' }})
    having_druid: Optional[List[chartdatafilter.ChartDataFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'having_druid' }})
    relative_end: Optional[ChartDataQueryObjectExtrasRelativeEndEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relative_end' }})
    relative_start: Optional[ChartDataQueryObjectExtrasRelativeStartEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relative_start' }})
    time_grain_sqla: Optional[ChartDataQueryObjectExtrasTimeGrainSqlaEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_grain_sqla' }})
    time_range_endpoints: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_range_endpoints' }})
    where: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    
class ChartDataQueryObjectPostProcessingOperationEnum(str, Enum):
    AGGREGATE = "aggregate"
    BOXPLOT = "boxplot"
    CONTRIBUTION = "contribution"
    CUM = "cum"
    GEODETIC_PARSE = "geodetic_parse"
    GEOHASH_DECODE = "geohash_decode"
    GEOHASH_ENCODE = "geohash_encode"
    PIVOT = "pivot"
    PROPHET = "prophet"
    ROLLING = "rolling"
    SELECT = "select"
    SORT = "sort"
    DIFF = "diff"
    COMPARE = "compare"


@dataclass_json
@dataclass
class ChartDataQueryObjectPostProcessing:
    operation: ChartDataQueryObjectPostProcessingOperationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operation' }})
    options: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    

@dataclass_json
@dataclass
class ChartDataQueryObject:
    annotation_layers: Optional[List[annotationlayer.AnnotationLayer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotation_layers' }})
    applied_time_extras: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_time_extras' }})
    apply_fetch_values_predicate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apply_fetch_values_predicate' }})
    columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columns' }})
    datasource: Optional[ChartDataQueryObjectDatasource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasource' }})
    druid_time_origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'druid_time_origin' }})
    extras: Optional[ChartDataQueryObjectExtras] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extras' }})
    filters: Optional[List[chartdatafilter.ChartDataFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    granularity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'granularity' }})
    granularity_sqla: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'granularity_sqla' }})
    groupby: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupby' }})
    having: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'having' }})
    having_filters: Optional[List[chartdatafilter.ChartDataFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'having_filters' }})
    is_rowcount: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_rowcount' }})
    is_timeseries: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_timeseries' }})
    metrics: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    order_desc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_desc' }})
    orderby: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderby' }})
    post_processing: Optional[List[ChartDataQueryObjectPostProcessing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_processing' }})
    result_type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_type' }})
    row_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_limit' }})
    row_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_offset' }})
    time_offsets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_offsets' }})
    time_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_range' }})
    time_shift: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_shift' }})
    timeseries_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeseries_limit' }})
    timeseries_limit_metric: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeseries_limit_metric' }})
    url_params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url_params' }})
    where: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'where' }})
    
