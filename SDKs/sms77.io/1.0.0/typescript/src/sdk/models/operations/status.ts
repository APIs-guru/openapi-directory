import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatusQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msg_id" })
  msgId: string;
}


export class StatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: StatusQueryParams;
}


export class StatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  status200TextPlainString?: string;
}
