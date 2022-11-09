import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GroupUpdateQueryCompositionEnum {
    And = "and"
,    Or = "or"
}


export class GroupUpdateQueryWhere extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=comparator" })
  comparator?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// GroupUpdateQuery
/** 
 * The criteria defining the group. If not provided, the group will be empty.
**/
export class GroupUpdateQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=composition" })
  composition?: GroupUpdateQueryCompositionEnum;

  @Metadata({ data: "json, name=select" })
  select?: string;

  @Metadata({ data: "json, name=where", elemType: shared.GroupUpdateQueryWhere })
  where?: GroupUpdateQueryWhere[];
}


export class GroupUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=query" })
  query?: GroupUpdateQuery;
}
