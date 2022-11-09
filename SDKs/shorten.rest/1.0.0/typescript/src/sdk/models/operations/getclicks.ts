import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClicksQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=continueFrom" })
  continueFrom?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetClicksSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class GetClicksRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetClicksQueryParams;

  @Metadata()
  security: GetClicksSecurity;
}


export class GetClicksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getClicksModel?: shared.GetClicksModel;

  @Metadata()
  statusCode: number;
}
