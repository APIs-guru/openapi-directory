import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAttributesComputedIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteAttributesComputedIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAttributesComputedIdPathParams;
}


export class DeleteAttributesComputedIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
