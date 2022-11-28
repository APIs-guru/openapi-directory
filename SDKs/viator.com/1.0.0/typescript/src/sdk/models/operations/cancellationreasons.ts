import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CancellationReasonsServerList = [
	"https://api.sandbox.viator.com/partner",
] as const;


export class CancellationReasonsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage: string;
}


export class CancellationReasonsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  headers: CancellationReasonsHeaders;
}


export class CancellationReasonsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  fourHundredAndOneUnauthorized?: shared.FourHundredAndOneUnauthorized;

  @SpeakeasyMetadata()
  fourHundredAndSixNotAcceptable?: shared.FourHundredAndSixNotAcceptable;

  @SpeakeasyMetadata()
  fiveHundredInternalServerError?: shared.FiveHundredInternalServerError;

  @SpeakeasyMetadata()
  fiveHundredAndThreeServiceUnavailable?: shared.FiveHundredAndThreeServiceUnavailable;

  @SpeakeasyMetadata({ elemType: shared.CancellationReasonsResponse })
  cancellationReasonsResponses?: shared.CancellationReasonsResponse[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
