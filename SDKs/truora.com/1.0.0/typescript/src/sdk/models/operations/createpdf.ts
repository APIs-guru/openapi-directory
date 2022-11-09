import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePdfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class CreatePdfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreatePdfPathParams;
}


export class CreatePdfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
