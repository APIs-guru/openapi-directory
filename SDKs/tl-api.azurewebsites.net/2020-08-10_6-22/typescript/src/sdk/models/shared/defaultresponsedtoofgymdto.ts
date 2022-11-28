import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GymDto } from "./gymdto";



// DefaultResponseDtoOfGymDto
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfGymDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isError" })
  isError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=responseException" })
  responseException?: any;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any;
}
