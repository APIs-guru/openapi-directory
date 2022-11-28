import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTeamYearsParticipatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamYearsParticipatedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamYearsParticipatedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamYearsParticipatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTeamYearsParticipatedPathParams;

  @SpeakeasyMetadata()
  headers: GetTeamYearsParticipatedHeaders;

  @SpeakeasyMetadata()
  security: GetTeamYearsParticipatedSecurity;
}


export class GetTeamYearsParticipatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTeamYearsParticipated200ApplicationJsonIntegers?: number[];
}
