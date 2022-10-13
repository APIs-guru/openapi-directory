from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderfulfillmentpickupdetails
from . import orderfulfillmentshipmentdetails


@dataclass_json
@dataclass
class OrderFulfillment:
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    pickup_details: Optional[orderfulfillmentpickupdetails.OrderFulfillmentPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickup_details' }})
    shipment_details: Optional[orderfulfillmentshipmentdetails.OrderFulfillmentShipmentDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipment_details' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
