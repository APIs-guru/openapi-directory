import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EndpointGetAvailableMarketsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class EndpointGetAvailableMarketsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  spotifyAuth: shared.SchemeSpotifyAuth;
}


export class EndpointGetAvailableMarketsRequest extends SpeakeasyBase {
  @Metadata()
  headers: EndpointGetAvailableMarketsHeaders;

  @Metadata()
  security: EndpointGetAvailableMarketsSecurity;
}


export class EndpointGetAvailableMarketsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseObject?: shared.ErrorResponseObject;

  @Metadata()
  marketsObject?: shared.MarketsObject;

  @Metadata()
  statusCode: number;
}
