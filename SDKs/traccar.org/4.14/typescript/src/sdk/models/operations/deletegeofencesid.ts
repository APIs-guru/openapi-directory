import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteGeofencesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DeleteGeofencesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteGeofencesIdPathParams;
}


export class DeleteGeofencesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
