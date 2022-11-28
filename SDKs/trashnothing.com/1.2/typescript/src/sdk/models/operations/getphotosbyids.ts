import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPhotosByIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=photo_ids" })
  photoIds: string;
}


export class GetPhotosByIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPhotosByIdsQueryParams;
}


export class GetPhotosByIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PhotoResult })
  photoResults?: shared.PhotoResult[];

  @SpeakeasyMetadata()
  statusCode: number;
}
