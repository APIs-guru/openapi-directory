import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictRankingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictRankingsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictRankingsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictRankingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictRankingsPathParams;

  @Metadata()
  headers: GetDistrictRankingsHeaders;

  @Metadata()
  security: GetDistrictRankingsSecurity;
}


export class GetDistrictRankingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DistrictRanking })
  districtRankings?: shared.DistrictRanking[];

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
