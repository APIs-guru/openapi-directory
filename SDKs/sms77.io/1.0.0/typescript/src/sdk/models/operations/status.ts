import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=msg_id" })
  msgId: string;
}


export class StatusRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: StatusQueryParams;
}


export class StatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  status200TextPlainString?: string;
}
