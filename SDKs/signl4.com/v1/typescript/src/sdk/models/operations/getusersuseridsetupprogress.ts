import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserIdSetupProgressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class GetUsersUserIdSetupProgressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserIdSetupProgressPathParams;
}


export class GetUsersUserIdSetupProgressResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;

  @Metadata()
  userSetupProgress?: shared.UserSetupProgress;
}
