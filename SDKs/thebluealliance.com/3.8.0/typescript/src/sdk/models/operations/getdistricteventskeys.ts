import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDistrictEventsKeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictEventsKeysHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictEventsKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictEventsKeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDistrictEventsKeysPathParams;

  @Metadata()
  headers: GetDistrictEventsKeysHeaders;

  @Metadata()
  security: GetDistrictEventsKeysSecurity;
}


export class GetDistrictEventsKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDistrictEventsKeys200ApplicationJsonStrings?: string[];
}
