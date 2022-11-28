import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPdfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class GetPdfQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPdfPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPdfQueryParams;
}


export class GetPdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
