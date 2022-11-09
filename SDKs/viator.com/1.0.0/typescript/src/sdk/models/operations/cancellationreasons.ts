import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CANCELLATIONREASONS_SERVERS = [
	"https://api.sandbox.viator.com/partner",
];



export class CancellationReasonsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class CancellationReasonsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  headers: CancellationReasonsHeaders;
}


export class CancellationReasonsResponse extends SpeakeasyBase {
  @Metadata()
  fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;

  @Metadata()
  fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;

  @Metadata()
  fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;

  @Metadata()
  fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;

  @Metadata({ elemType: shared.CancellationReasonsResponse })
  cancellationReasonsResponses?: shared.CancellationReasonsResponse[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
