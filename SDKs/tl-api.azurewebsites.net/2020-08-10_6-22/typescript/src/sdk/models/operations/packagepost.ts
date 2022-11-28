import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PackagePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PackageDto;
}


export class PackagePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiException?: shared.ApiException;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfStatusDto?: shared.DefaultResponseDtoOfStatusDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
