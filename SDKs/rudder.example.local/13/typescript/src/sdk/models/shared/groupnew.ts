import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupNewProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}

export enum GroupNewQueryCompositionEnum {
    And = "and",
    Or = "or"
}


export class GroupNewQueryWhere extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GroupNewQuery
/** 
 * The criteria defining the group. If not provided, the group will be empty.
**/
export class GroupNewQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=composition" })
  composition?: GroupNewQueryCompositionEnum;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: string;

  @SpeakeasyMetadata({ data: "json, name=where", elemType: GroupNewQueryWhere })
  where?: GroupNewQueryWhere[];
}


export class GroupNew extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName: string;

  @SpeakeasyMetadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: GroupNewProperties })
  properties?: GroupNewProperties[];

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: GroupNewQuery;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;
}
