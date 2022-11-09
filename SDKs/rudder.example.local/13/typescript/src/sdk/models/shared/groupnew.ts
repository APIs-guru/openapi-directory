import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupNewProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: any;
}

export enum GroupNewQueryCompositionEnum {
    And = "and"
,    Or = "or"
}


export class GroupNewQueryWhere extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=comparator" })
  comparator?: string;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


// GroupNewQuery
/** 
 * The criteria defining the group. If not provided, the group will be empty.
**/
export class GroupNewQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=composition" })
  composition?: GroupNewQueryCompositionEnum;

  @Metadata({ data: "json, name=select" })
  select?: string;

  @Metadata({ data: "json, name=where", elemType: shared.GroupNewQueryWhere })
  where?: GroupNewQueryWhere[];
}


export class GroupNew extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName: string;

  @Metadata({ data: "json, name=dynamic" })
  dynamic?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=properties", elemType: shared.GroupNewProperties })
  properties?: GroupNewProperties[];

  @Metadata({ data: "json, name=query" })
  query?: GroupNewQuery;

  @Metadata({ data: "json, name=source" })
  source?: string;
}
