import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DetailedInvalidParam } from "./detailedinvalidparam";



export class ValidationErrorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instance" })
  instance?: string;

  @SpeakeasyMetadata({ data: "json, name=invalid_parameters", elemType: DetailedInvalidParam })
  invalidParameters?: DetailedInvalidParam[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
