import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserDetailsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class UserDetailsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserDetailsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UserDetailsUpdateRequest;
}


export class UserDetailsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;

  @Metadata()
  inlineResponse409?: any;
}
