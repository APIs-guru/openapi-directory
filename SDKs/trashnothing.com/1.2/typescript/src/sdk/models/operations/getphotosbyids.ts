import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPhotosByIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device_pixel_ratio" })
  devicePixelRatio?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=photo_ids" })
  photoIds: string;
}


export class GetPhotosByIdsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPhotosByIdsQueryParams;
}


export class GetPhotosByIdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PhotoResult })
  photoResults?: shared.PhotoResult[];

  @Metadata()
  statusCode: number;
}
