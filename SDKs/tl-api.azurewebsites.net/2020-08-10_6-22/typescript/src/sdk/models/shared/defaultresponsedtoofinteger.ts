import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DefaultResponseDtoOfInteger
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfInteger extends SpeakeasyBase {
  @Metadata({ data: "json, name=isError" })
  isError?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=responseException" })
  responseException?: any;

  @Metadata({ data: "json, name=result" })
  result?: number;
}
