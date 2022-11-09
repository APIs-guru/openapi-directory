import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSelfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userResponse?: shared.UserResponse;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
