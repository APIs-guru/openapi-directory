import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EventSubscriptionsResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}


export class EventSubscriptionsResponseResultMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=httpStatus" })
  httpStatus?: string;
}


export class EventSubscriptionsResponseResultResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


export class EventSubscriptionsResponseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: EventSubscriptionsResponseResultMeta;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: EventSubscriptionsResponseResultResult;
}


export class EventSubscriptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: EventSubscriptionsResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: EventSubscriptionsResponseResult;
}
