import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}

export enum GroupQueryCompositionEnum {
    And = "and",
    Or = "or"
}


export class GroupQueryWhere extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GroupQuery
/** 
 * The criteria defining the group
**/
export class GroupQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=composition" })
  composition?: GroupQueryCompositionEnum;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: string;

  @SpeakeasyMetadata({ data: "json, name=where", elemType: GroupQueryWhere })
  where?: GroupQueryWhere[];
}


export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=groupClass" })
  groupClass?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=nodeIds" })
  nodeIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GroupProperties })
  properties?: GroupProperties[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: GroupQuery;
}
