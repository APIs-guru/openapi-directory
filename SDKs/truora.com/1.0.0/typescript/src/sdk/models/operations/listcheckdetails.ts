import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListCheckDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class ListCheckDetailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_key" })
  startKey?: string;
}


export class ListCheckDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ListCheckDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListCheckDetailsPathParams;

  @SpeakeasyMetadata()
  queryParams: ListCheckDetailsQueryParams;

  @SpeakeasyMetadata()
  security: ListCheckDetailsSecurity;
}


export class ListCheckDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  checkDetailsOutput?: shared.CheckDetailsOutput;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
