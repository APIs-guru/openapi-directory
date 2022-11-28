import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDistrictEventsSimplePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district_key" })
  districtKey: string;
}


export class GetDistrictEventsSimpleHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" })
  ifModifiedSince?: string;
}


export class GetDistrictEventsSimpleSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetDistrictEventsSimpleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDistrictEventsSimplePathParams;

  @SpeakeasyMetadata()
  headers: GetDistrictEventsSimpleHeaders;

  @SpeakeasyMetadata()
  security: GetDistrictEventsSimpleSecurity;
}


export class GetDistrictEventsSimpleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EventSimple })
  eventSimples?: shared.EventSimple[];

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
