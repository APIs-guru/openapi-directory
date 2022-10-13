from dataclasses import dataclass, field
from typing import Enum

class DataSourceTypeEnum(str, Enum):
    CISCO_SWITCH_DATA_SOURCE = "CiscoSwitchDataSource"
    DELL_SWITCH_DATA_SOURCE = "DellSwitchDataSource"
    ARISTA_SWITCH_DATA_SOURCE = "AristaSwitchDataSource"
    BROCADE_SWITCH_DATA_SOURCE = "BrocadeSwitchDataSource"
    JUNIPER_SWITCH_DATA_SOURCE = "JuniperSwitchDataSource"
    V_CENTER_DATA_SOURCE = "VCenterDataSource"
    NSXV_MANAGER_DATA_SOURCE = "NSXVManagerDataSource"
    UCS_MANAGER_DATA_SOURCE = "UCSManagerDataSource"
    HPVC_MANAGER_DATA_SOURCE = "HPVCManagerDataSource"
    HP_ONE_VIEW_DATA_SOURCE = "HPOneViewDataSource"
    PAN_FIREWALL_DATA_SOURCE = "PanFirewallDataSource"
    CHECKPOINT_FIREWALL_DATA_SOURCE = "CheckpointFirewallDataSource"

