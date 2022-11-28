import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyOrdersBuyingIdMarkReceivedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyOrdersBuyingIdMarkReceivedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersBuyingIdMarkReceivedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyOrdersBuyingIdMarkReceivedPathParams;

  @SpeakeasyMetadata()
  security: PostMyOrdersBuyingIdMarkReceivedSecurity;
}


export class PostMyOrdersBuyingIdMarkReceivedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
