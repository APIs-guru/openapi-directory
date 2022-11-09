import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfVodWasPurchasedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CheckIfVodWasPurchasedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckIfVodWasPurchasedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfVodWasPurchasedPathParams;

  @Metadata()
  security: CheckIfVodWasPurchasedSecurity;
}


export class CheckIfVodWasPurchasedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandPage?: shared.OnDemandPage;
}
