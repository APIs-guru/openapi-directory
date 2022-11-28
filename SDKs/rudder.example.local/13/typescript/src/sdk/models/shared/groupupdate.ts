import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GroupUpdateQueryCompositionEnum {
    And = "and",
    Or = "or"
}


export class GroupUpdateQueryWhere extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=comparator" })
  comparator?: string;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GroupUpdateQuery
/** 
 * The criteria defining the group. If not provided, the group will be empty.
**/
export class GroupUpdateQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=composition" })
  composition?: GroupUpdateQueryCompositionEnum;

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: string;

  @SpeakeasyMetadata({ data: "json, name=where", elemType: GroupUpdateQueryWhere })
  where?: GroupUpdateQueryWhere[];
}


export class GroupUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: GroupUpdateQuery;
}
