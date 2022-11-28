import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EndpointGetAvailableMarketsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAvailableMarketsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAvailableMarketsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: EndpointGetAvailableMarketsHeaders;

  @SpeakeasyMetadata()
  security: EndpointGetAvailableMarketsSecurity;
}


export class EndpointGetAvailableMarketsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @SpeakeasyMetadata()
  marketsObject?: shared.MarketsObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
