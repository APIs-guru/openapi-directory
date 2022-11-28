import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictEventsKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictEventsKeysHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictEventsKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictEventsKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictEventsKeysPathParams;

  @SpeakeasyMetadata()
  headers: GetDistrictEventsKeysHeaders;

  @SpeakeasyMetadata()
  security: GetDistrictEventsKeysSecurity;
}


export class GetDistrictEventsKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDistrictEventsKeys200ApplicationJsonStrings?: string[];
}
