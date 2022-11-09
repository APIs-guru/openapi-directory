import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorData } from "./errordata";
import { LocalisationDetails } from "./localisationdetails";

export enum ErrorLocationTypeEnum {
    RequestBody = "requestBody"
,    QueryParam = "queryParam"
,    RequestParam = "requestParam"
,    Header = "header"
,    PathParam = "pathParam"
}


export class Error extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @Metadata({ data: "json, name=errorData" })
  errorData?: ErrorData;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=localisationDetails" })
  localisationDetails?: LocalisationDetails;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=locationType" })
  locationType?: ErrorLocationTypeEnum;

  @Metadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}
