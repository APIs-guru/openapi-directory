import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCommandsSendQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" })
  deviceId?: number;
}


export class GetCommandsSendRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetCommandsSendQueryParams;
}


export class GetCommandsSendResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Command })
  commands?: shared.Command[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
