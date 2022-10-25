from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyStringEquals:
    case_insensitive: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caseInsensitive' }})
    equal_to: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equalTo' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyStringContains:
    contains: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contains' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyRegularExpressionMatch:
    matches: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyNegativeRegularExpressionMatch:
    does_not_match: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doesNotMatch' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyJSONEquals:
    equal_to_json: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equalToJson' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyJSONPathMatch:
    ignore_array_order: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreArrayOrder' }})
    ignore_extra_elements: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreExtraElements' }})
    matches_json_path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesJsonPath' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyXMLEquality:
    equal_to_xml: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'equalToXml' }})
    

@dataclass_json
@dataclass
class PostAdminRequestsRemoveByMetadataRequestBodyXPathMatch:
    matches_xpath: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchesXpath' }})
    namespaces: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaces' }})
    value_pattern: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valuePattern' }})
    

@dataclass
class PostAdminRequestsRemoveByMetadataRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostAdminRequestsRemoveByMetadataResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
