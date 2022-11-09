import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteLegalEntityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteLegalEntityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLegalEntityPathParams;
}


export class DeleteLegalEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
