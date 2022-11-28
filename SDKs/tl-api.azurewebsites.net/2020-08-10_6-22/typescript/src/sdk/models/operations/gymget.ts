import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GymGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=gymID" })
  gymId: number;
}


export class GymGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GymGetPathParams;
}


export class GymGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponse?: shared.ApiResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultResponseDtoOfGymDto?: shared.DefaultResponseDtoOfGymDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
