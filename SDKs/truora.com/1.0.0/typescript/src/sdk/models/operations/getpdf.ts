import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPdfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class GetPdfQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPdfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPdfPathParams;

  @Metadata()
  queryParams: GetPdfQueryParams;
}


export class GetPdfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
