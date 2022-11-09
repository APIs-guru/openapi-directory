import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDriversIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteDriversIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDriversIdPathParams;
}


export class DeleteDriversIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
