import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTeamYearsParticipatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=team_key" })
  teamKey: string;
}


export class GetTeamYearsParticipatedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetTeamYearsParticipatedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetTeamYearsParticipatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTeamYearsParticipatedPathParams;

  @Metadata()
  headers: GetTeamYearsParticipatedHeaders;

  @Metadata()
  security: GetTeamYearsParticipatedSecurity;
}


export class GetTeamYearsParticipatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTeamYearsParticipated200ApplicationJsonIntegers?: number[];
}
