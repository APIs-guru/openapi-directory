import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePdfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=check_id" })
  checkId: string;
}


export class CreatePdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreatePdfPathParams;
}


export class CreatePdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
