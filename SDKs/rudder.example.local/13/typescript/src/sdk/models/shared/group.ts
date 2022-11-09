import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: any;
}

export enum GroupQueryCompositionEnum {
    And = "and"
,    Or = "or"
}


export class GroupQueryWhere extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=comparator" })
  comparator?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// GroupQuery
/** 
 * The criteria defining the group
**/
export class GroupQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=composition" })
  composition?: GroupQueryCompositionEnum;

  @Metadata({ data: "json, name=select" })
  select?: string;

  @Metadata({ data: "json, name=where", elemType: shared.GroupQueryWhere })
  where?: GroupQueryWhere[];
}


export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=groupClass" })
  groupClass?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=nodeIds" })
  nodeIds?: string[];

  @Metadata({ data: "json, name=properties", elemType: shared.GroupProperties })
  properties?: GroupProperties[];

  @Metadata({ data: "json, name=query" })
  query?: GroupQuery;
}
