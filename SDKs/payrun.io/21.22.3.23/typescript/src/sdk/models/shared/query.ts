import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryQueryGroup
/** 
 * The querys' groups
**/
export class QueryQueryGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=Group" })
  group?: any[];
}


// QueryQueryVariable
/** 
 * The querys' variables
**/
export class QueryQueryVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=Variable" })
  variable?: any[];
}


export class QueryQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludeNullOrEmptyElements" })
  excludeNullOrEmptyElements?: boolean;

  @Metadata({ data: "json, name=Groups" })
  groups?: QueryQueryGroup;

  @Metadata({ data: "json, name=RootNodeName" })
  rootNodeName?: string;

  @Metadata({ data: "json, name=SuppressMetricAttributes" })
  suppressMetricAttributes?: boolean;

  @Metadata({ data: "json, name=Variables" })
  variables?: QueryQueryVariable;
}


export class Query extends SpeakeasyBase {
  @Metadata({ data: "json, name=Query" })
  query?: QueryQuery;
}
