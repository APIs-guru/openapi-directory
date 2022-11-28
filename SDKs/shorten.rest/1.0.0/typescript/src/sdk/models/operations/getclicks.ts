import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetClicksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=continueFrom" })
  continueFrom?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetClicksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetClicksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetClicksQueryParams;

  @SpeakeasyMetadata()
  security: GetClicksSecurity;
}


export class GetClicksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getClicksModel?: shared.GetClicksModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
