import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePhotoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=photo_id" })
  photoId: string;
}


export class DeletePhotoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeletePhotoPathParams;
}


export class DeletePhotoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
