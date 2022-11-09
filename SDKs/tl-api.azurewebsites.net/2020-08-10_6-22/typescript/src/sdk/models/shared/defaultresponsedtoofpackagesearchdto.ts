import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PackageSearchDto } from "./packagesearchdto";


// DefaultResponseDtoOfPackageSearchDto
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfPackageSearchDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=isError" })
  isError?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=responseException" })
  responseException?: any;

  @Metadata({ data: "json, name=result" })
  result?: any;
}
