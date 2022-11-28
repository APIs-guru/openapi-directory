import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteLegalEntityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteLegalEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLegalEntityPathParams;
}


export class DeleteLegalEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
