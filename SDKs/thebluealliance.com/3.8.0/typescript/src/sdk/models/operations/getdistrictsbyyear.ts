import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictsByYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetDistrictsByYearHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictsByYearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictsByYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictsByYearPathParams;

  @Metadata()
  headers: GetDistrictsByYearHeaders;

  @Metadata()
  security: GetDistrictsByYearSecurity;
}


export class GetDistrictsByYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DistrictList })
  districtLists?: shared.DistrictList[];

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
