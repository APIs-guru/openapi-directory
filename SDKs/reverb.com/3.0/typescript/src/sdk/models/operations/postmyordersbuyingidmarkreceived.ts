import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyOrdersBuyingIdMarkReceivedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyOrdersBuyingIdMarkReceivedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyOrdersBuyingIdMarkReceivedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyOrdersBuyingIdMarkReceivedPathParams;

  @Metadata()
  security: PostMyOrdersBuyingIdMarkReceivedSecurity;
}


export class PostMyOrdersBuyingIdMarkReceivedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
