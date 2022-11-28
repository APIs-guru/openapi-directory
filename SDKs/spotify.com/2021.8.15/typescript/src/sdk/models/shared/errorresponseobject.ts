import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorObject } from "./errorobject";



export class ErrorResponseObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ErrorObject;
}
