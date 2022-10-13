from dataclasses import dataclass, field



@dataclass
class SchemeClientID:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'PLAID-CLIENT-ID' }})
    

@dataclass
class SchemePlaidVersion:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'Plaid-Version' }})
    

@dataclass
class SchemeSecret:
    api_key: str = field(default=None, metadata={'security': { 'field_name': 'PLAID-SECRET' }})
    

@dataclass
class Security:
    client_id: SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    plaid_version: SchemePlaidVersion = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    secret: SchemeSecret = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
