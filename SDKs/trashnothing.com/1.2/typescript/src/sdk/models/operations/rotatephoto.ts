import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RotatePhotoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=photo_id" })
  photoId: string;
}


export class RotatePhotoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=degrees" })
  degrees: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class RotatePhotoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RotatePhotoPathParams;

  @Metadata()
  queryParams: RotatePhotoQueryParams;
}


export class RotatePhotoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  photoResult?: shared.PhotoResult;

  @Metadata()
  statusCode: number;
}
