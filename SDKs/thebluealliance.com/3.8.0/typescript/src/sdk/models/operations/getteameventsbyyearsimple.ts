import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamEventsByYearSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetTeamEventsByYearSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamEventsByYearSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamEventsByYearSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamEventsByYearSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetTeamEventsByYearSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetTeamEventsByYearSimpleSecurity;
}


export class GetTeamEventsByYearSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EventSimple })
  eventSimples?: shared.EventSimple[];

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
