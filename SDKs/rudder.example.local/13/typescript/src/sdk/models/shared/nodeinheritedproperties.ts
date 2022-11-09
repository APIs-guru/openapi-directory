import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum NodeInheritedPropertiesPropertiesHierarchyKindEnum {
    Global = "global"
,    Group = "group"
}


export class NodeInheritedPropertiesPropertiesHierarchy extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind: NodeInheritedPropertiesPropertiesHierarchyKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}

export enum NodeInheritedPropertiesPropertiesProviderEnum {
    Inherited = "inherited"
,    Overridden = "overridden"
,    PluginNameLikeDatasources = "plugin name like datasources"
}


export class NodeInheritedPropertiesProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=hierarchy", elemType: shared.NodeInheritedPropertiesPropertiesHierarchy })
  hierarchy?: NodeInheritedPropertiesPropertiesHierarchy[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=origval" })
  origval?: any;

  @Metadata({ data: "json, name=provider" })
  provider?: NodeInheritedPropertiesPropertiesProviderEnum;

  @Metadata({ data: "json, name=value" })
  value: any;
}


export class NodeInheritedProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=properties", elemType: shared.NodeInheritedPropertiesProperties })
  properties: NodeInheritedPropertiesProperties[];
}
