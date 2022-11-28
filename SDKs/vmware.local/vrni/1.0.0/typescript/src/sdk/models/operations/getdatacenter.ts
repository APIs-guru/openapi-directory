import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDatacenterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetDatacenterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" })
  time?: number;
}


export class GetDatacenterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetDatacenterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDatacenterPathParams;

  @SpeakeasyMetadata()
  queryParams: GetDatacenterQueryParams;

  @SpeakeasyMetadata()
  security: GetDatacenterSecurity;
}


export class GetDatacenterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiError?: shared.ApiError;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vcDatacenter?: shared.VcDatacenter;
}
