from dataclasses import dataclass, field



@dataclass
class SchemeClientID:
    api_key: str = field(metadata={'security': { 'field_name': 'PLAID-CLIENT-ID' }})
    

@dataclass
class SchemePlaidVersion:
    api_key: str = field(metadata={'security': { 'field_name': 'Plaid-Version' }})
    

@dataclass
class SchemeSecret:
    api_key: str = field(metadata={'security': { 'field_name': 'PLAID-SECRET' }})
    

@dataclass
class Security:
    client_id: SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    plaid_version: SchemePlaidVersion = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    secret: SchemeSecret = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
