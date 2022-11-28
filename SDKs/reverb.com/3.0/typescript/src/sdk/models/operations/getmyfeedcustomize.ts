import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyFeedCustomizeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFeedCustomizeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetMyFeedCustomizeSecurity;
}


export class GetMyFeedCustomizeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
