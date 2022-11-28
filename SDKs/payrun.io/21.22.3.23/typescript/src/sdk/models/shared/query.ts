import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryQueryGroup
/** 
 * The querys' groups
**/
export class QueryQueryGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Group" })
  group?: any[];
}


// QueryQueryVariable
/** 
 * The querys' variables
**/
export class QueryQueryVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Variable" })
  variable?: any[];
}


export class QueryQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludeNullOrEmptyElements" })
  excludeNullOrEmptyElements?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Groups" })
  groups?: QueryQueryGroup;

  @SpeakeasyMetadata({ data: "json, name=RootNodeName" })
  rootNodeName?: string;

  @SpeakeasyMetadata({ data: "json, name=SuppressMetricAttributes" })
  suppressMetricAttributes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Variables" })
  variables?: QueryQueryVariable;
}


export class Query extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Query" })
  query?: QueryQuery;
}
