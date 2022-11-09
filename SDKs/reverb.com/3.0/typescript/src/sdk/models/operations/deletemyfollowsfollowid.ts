import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMyFollowsFollowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=follow_id" })
  followId: string;
}


export class DeleteMyFollowsFollowIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsFollowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyFollowsFollowIdPathParams;

  @Metadata()
  security: DeleteMyFollowsFollowIdSecurity;
}


export class DeleteMyFollowsFollowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
