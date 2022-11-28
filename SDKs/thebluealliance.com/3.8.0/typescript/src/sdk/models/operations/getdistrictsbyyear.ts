import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictsByYearPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetDistrictsByYearHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictsByYearSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictsByYearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictsByYearPathParams;

  @SpeakeasyMetadata()
  headers: GetDistrictsByYearHeaders;

  @SpeakeasyMetadata()
  security: GetDistrictsByYearSecurity;
}


export class GetDistrictsByYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DistrictList })
  districtLists?: shared.DistrictList[];

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
