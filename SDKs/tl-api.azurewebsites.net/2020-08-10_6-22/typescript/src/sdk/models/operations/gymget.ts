import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GymGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=gymID" })
  gymId: number;
}


export class GymGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GymGetPathParams;
}


export class GymGetResponse extends SpeakeasyBase {
  @Metadata()
  apiResponse?: shared.ApiResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  defaultResponseDtoOfGymDto?: shared.DefaultResponseDtoOfGymDto;

  @Metadata()
  statusCode: number;
}
