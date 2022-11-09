import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommandsSendQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;
}


export class GetCommandsSendRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCommandsSendQueryParams;
}


export class GetCommandsSendResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.Command })
  commands?: shared.Command[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
