import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GymDto } from "./gymdto";


// DefaultResponseDtoOfGymDto
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfGymDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=isError" })
  isError?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=responseException" })
  responseException?: any;

  @Metadata({ data: "json, name=result" })
  result?: any;
}
