import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCheckDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class ListCheckDetailsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;
}


export class ListCheckDetailsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ListCheckDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ListCheckDetailsPathParams;

  @Metadata()
  queryParams: ListCheckDetailsQueryParams;

  @Metadata()
  security: ListCheckDetailsSecurity;
}


export class ListCheckDetailsResponse extends SpeakeasyBase {
  @Metadata()
  checkDetailsOutput?: shared.CheckDetailsOutput;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
