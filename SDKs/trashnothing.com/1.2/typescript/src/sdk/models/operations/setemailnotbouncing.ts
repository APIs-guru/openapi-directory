import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetEmailNotBouncingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  currentUser?: shared.CurrentUser;

  @SpeakeasyMetadata()
  statusCode: number;
}
