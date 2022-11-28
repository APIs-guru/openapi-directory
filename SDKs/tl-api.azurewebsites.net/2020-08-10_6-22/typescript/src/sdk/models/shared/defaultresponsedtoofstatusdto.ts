import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StatusDto } from "./statusdto";



// DefaultResponseDtoOfStatusDto
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfStatusDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isError" })
  isError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=responseException" })
  responseException?: any;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: any;
}
