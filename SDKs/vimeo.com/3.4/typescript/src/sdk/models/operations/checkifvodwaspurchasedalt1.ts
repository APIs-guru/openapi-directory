import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckIfVodWasPurchasedAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class CheckIfVodWasPurchasedAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CheckIfVodWasPurchasedAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CheckIfVodWasPurchasedAlt1PathParams;

  @Metadata()
  security: CheckIfVodWasPurchasedAlt1Security;
}


export class CheckIfVodWasPurchasedAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandPage?: shared.OnDemandPage;
}
