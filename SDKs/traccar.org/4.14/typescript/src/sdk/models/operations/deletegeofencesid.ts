import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteGeofencesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGeofencesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteGeofencesIdPathParams;
}


export class DeleteGeofencesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
