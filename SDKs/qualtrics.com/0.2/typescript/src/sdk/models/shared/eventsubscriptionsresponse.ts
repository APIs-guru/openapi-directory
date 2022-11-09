import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EventSubscriptionsResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpStatus" })
  httpStatus?: string;

  @Metadata({ data: "json, name=requestId" })
  requestId?: string;
}


export class EventSubscriptionsResponseResultMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=httpStatus" })
  httpStatus?: string;
}


export class EventSubscriptionsResponseResultResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class EventSubscriptionsResponseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: EventSubscriptionsResponseResultMeta;

  @Metadata({ data: "json, name=result" })
  result?: EventSubscriptionsResponseResultResult;
}


export class EventSubscriptionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: EventSubscriptionsResponseMeta;

  @Metadata({ data: "json, name=result" })
  result?: EventSubscriptionsResponseResult;
}
