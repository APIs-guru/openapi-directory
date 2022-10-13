from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DiscoverableParticipantDocumentTypesEnum(str, Enum):
    INVOICE = "invoice"
    CREDITNOTE = "creditnote"
    INVOICE_RESPONSE = "invoice_response"
    ORDER = "order"
    ORDER_RESPONSE = "order_response"
    DESPATCH_NOTIFICATION = "despatch_notification"
    PRODUCT_CATALOGUE = "product_catalogue"


@dataclass_json
@dataclass
class DiscoverableParticipant:
    document_types: Optional[List[DiscoverableParticipantDocumentTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentTypes' }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    meta_scheme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metaScheme' }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network' }})
    scheme: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheme' }})
    
