from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceinstance
from . import collectionlinks
from . import collectionmetadata


@dataclass_json
@dataclass
class ServiceInstancesCollection:
    data: Optional[List[serviceinstance.ServiceInstance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    links: Optional[collectionlinks.CollectionLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    meta: Optional[collectionmetadata.CollectionMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    
