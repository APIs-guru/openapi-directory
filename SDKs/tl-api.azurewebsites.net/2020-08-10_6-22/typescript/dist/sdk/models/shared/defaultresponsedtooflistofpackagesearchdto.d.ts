import { SpeakeasyBase } from "../../../internal/utils";
import { PackageSearchDto } from "./packagesearchdto";
/**
 * The DefaultResponseDTO Class.
 * Contains fields of DefaultResponse DTO in application.
 *
**/
export declare class DefaultResponseDtoOfListOfPackageSearchDto extends SpeakeasyBase {
    isError?: boolean;
    message?: string;
    responseException?: any;
    result?: PackageSearchDto[];
}
