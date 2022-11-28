from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesPathParams:
    sku: str = field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams:
    ship_node: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'shipNode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    wm_consumer_channel_type: str = field(metadata={'header': { 'field_name': 'WM_CONSUMER.CHANNEL.TYPE', 'style': 'simple', 'explode': False }})
    wm_qos_correlation_id: str = field(metadata={'header': { 'field_name': 'WM_QOS.CORRELATION_ID', 'style': 'simple', 'explode': False }})
    wm_sec_access_token: str = field(metadata={'header': { 'field_name': 'WM_SEC.ACCESS_TOKEN', 'style': 'simple', 'explode': False }})
    wm_svc_name: str = field(metadata={'header': { 'field_name': 'WM_SVC.NAME', 'style': 'simple', 'explode': False }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQtyUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum(str, Enum):
    APPLICATION = "APPLICATION"
    SYSTEM = "SYSTEM"
    REQUEST = "REQUEST"
    DATA = "DATA"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum(str, Enum):
    INFO = "INFO"
    WARN = "WARN"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors:
    r"""GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors
    Node Update Error description.
    """
    
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    category: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    causes: Optional[List[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsCauses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('causes') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    error_identifiers: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorIdentifiers') }})
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('info') }})
    severity: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrorsSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum(str, Enum):
    EACH = "EACH"


@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty:
    amount: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    unit: GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQtyUnitEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit') }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes:
    avail_to_sell_qty: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesAvailToSellQty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availToSellQty') }})
    errors: Optional[List[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesErrors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    input_qty: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodesInputQty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputQty') }})
    ship_node: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipNode') }})
    

@dataclass_json
@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON:
    nodes: Optional[List[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSONNodes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    sku: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sku') }})
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesRequest:
    headers: GetMultiNodeInventoryForSkuAndAllShipnodesHeaders = field()
    path_params: GetMultiNodeInventoryForSkuAndAllShipnodesPathParams = field()
    query_params: GetMultiNodeInventoryForSkuAndAllShipnodesQueryParams = field()
    

@dataclass
class GetMultiNodeInventoryForSkuAndAllShipnodesResponse:
    content_type: str = field()
    status_code: int = field()
    get_multi_node_inventory_for_sku_and_all_shipnodes_200_application_json_object: Optional[GetMultiNodeInventoryForSkuAndAllShipnodes200ApplicationJSON] = field(default=None)
    
