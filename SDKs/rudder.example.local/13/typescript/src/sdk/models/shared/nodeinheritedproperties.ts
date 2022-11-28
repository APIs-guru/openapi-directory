import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodeInheritedPropertiesPropertiesHierarchyKindEnum {
    Global = "global",
    Group = "group"
}


export class NodeInheritedPropertiesPropertiesHierarchy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind: NodeInheritedPropertiesPropertiesHierarchyKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}

export enum NodeInheritedPropertiesPropertiesProviderEnum {
    Inherited = "inherited",
    Overridden = "overridden",
    PluginNameLikeDatasources = "plugin name like datasources"
}


export class NodeInheritedPropertiesProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hierarchy", elemType: NodeInheritedPropertiesPropertiesHierarchy })
  hierarchy?: NodeInheritedPropertiesPropertiesHierarchy[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=origval" })
  origval?: any;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: NodeInheritedPropertiesPropertiesProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}


export class NodeInheritedProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: NodeInheritedPropertiesProperties })
  properties: NodeInheritedPropertiesProperties[];
}
