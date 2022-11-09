import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCurrentUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  currentUser?: shared.CurrentUser;

  @Metadata()
  statusCode: number;
}
