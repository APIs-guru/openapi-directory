import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEventAlliancesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" })
  eventKey: string;
}


export class GetEventAlliancesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetEventAlliancesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetEventAlliancesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEventAlliancesPathParams;

  @SpeakeasyMetadata()
  headers: GetEventAlliancesHeaders;

  @SpeakeasyMetadata()
  security: GetEventAlliancesSecurity;
}


export class GetEventAlliancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EliminationAlliance })
  eliminationAlliances?: shared.EliminationAlliance[];

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
