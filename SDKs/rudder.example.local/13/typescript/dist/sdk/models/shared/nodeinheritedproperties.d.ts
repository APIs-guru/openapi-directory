import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NodeInheritedPropertiesPropertiesHierarchyKindEnum {
    Global = "global",
    Group = "group"
}
export declare class NodeInheritedPropertiesPropertiesHierarchy extends SpeakeasyBase {
    id?: string;
    kind: NodeInheritedPropertiesPropertiesHierarchyKindEnum;
    name?: string;
    value: string;
}
export declare enum NodeInheritedPropertiesPropertiesProviderEnum {
    Inherited = "inherited",
    Overridden = "overridden",
    PluginNameLikeDatasources = "plugin name like datasources"
}
export declare class NodeInheritedPropertiesProperties extends SpeakeasyBase {
    hierarchy?: NodeInheritedPropertiesPropertiesHierarchy[];
    name: string;
    origval?: any;
    provider?: NodeInheritedPropertiesPropertiesProviderEnum;
    value: any;
}
export declare class NodeInheritedProperties extends SpeakeasyBase {
    id: string;
    properties: NodeInheritedPropertiesProperties[];
}
