from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FindingsMetaRisk:
    cvss_base_score: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvss_base_score' }})
    cvss_vector: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvss_vector' }})
    exploit_available: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exploit_available' }})
    exploitability_ease: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exploitability_ease' }})
    patch_publication_date: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patch_publication_date' }})
    

@dataclass_json
@dataclass
class FindingsMetaVulnRefs:
    bid: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bid' }})
    cpe: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpe' }})
    cve: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cve' }})
    cwe: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cwe' }})
    
class FindingsSeverityEnum(str, Enum):
    INFO = "info"
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


@dataclass_json
@dataclass
class Findings:
    confidence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    issue_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issue_id' }})
    meta_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_links' }})
    meta_risk: Optional[FindingsMetaRisk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_risk' }})
    meta_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_tags' }})
    meta_vuln_refs: Optional[FindingsMetaVulnRefs] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta_vuln_refs' }})
    raw: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'raw' }})
    severity: Optional[FindingsSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    solution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solution' }})
    target_addrs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_addrs' }})
    target_proto: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_proto' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
