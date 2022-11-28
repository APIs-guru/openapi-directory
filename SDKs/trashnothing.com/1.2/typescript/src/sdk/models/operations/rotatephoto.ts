import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RotatePhotoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=photo_id" })
  photoId: string;
}


export class RotatePhotoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=degrees" })
  degrees: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;
}


export class RotatePhotoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RotatePhotoPathParams;

  @SpeakeasyMetadata()
  queryParams: RotatePhotoQueryParams;
}


export class RotatePhotoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  photoResult?: shared.PhotoResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
