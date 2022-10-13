from dataclasses import dataclass, field



@dataclass
class CreateReportInput:
    name: str = field(default=None, metadata={'form': { 'field_name': 'name' }})
    
