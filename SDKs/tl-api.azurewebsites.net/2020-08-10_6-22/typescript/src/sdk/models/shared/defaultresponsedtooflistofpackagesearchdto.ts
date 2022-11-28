import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageSearchDto } from "./packagesearchdto";



// DefaultResponseDtoOfListOfPackageSearchDto
/** 
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *             
**/
export class DefaultResponseDtoOfListOfPackageSearchDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isError" })
  isError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=responseException" })
  responseException?: any;

  @SpeakeasyMetadata({ data: "json, name=result", elemType: PackageSearchDto })
  result?: PackageSearchDto[];
}
