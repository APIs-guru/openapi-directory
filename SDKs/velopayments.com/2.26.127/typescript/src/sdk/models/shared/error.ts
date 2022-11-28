import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorData } from "./errordata";
import { LocalisationDetails } from "./localisationdetails";


export enum ErrorLocationTypeEnum {
    RequestBody = "requestBody",
    QueryParam = "queryParam",
    RequestParam = "requestParam",
    Header = "header",
    PathParam = "pathParam"
}


export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: string;

  @SpeakeasyMetadata({ data: "json, name=errorData" })
  errorData?: ErrorData;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=localisationDetails" })
  localisationDetails?: LocalisationDetails;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=locationType" })
  locationType?: ErrorLocationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=reasonCode" })
  reasonCode?: string;
}
