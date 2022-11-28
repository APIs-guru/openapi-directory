import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeletePhotoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=photo_id" })
  photoId: string;
}


export class DeletePhotoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeletePhotoPathParams;
}


export class DeletePhotoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
