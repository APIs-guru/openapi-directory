import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ValidationError } from "./validationerror";



export class ValidationErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail", elemType: ValidationError })
  detail?: ValidationError[];
}
