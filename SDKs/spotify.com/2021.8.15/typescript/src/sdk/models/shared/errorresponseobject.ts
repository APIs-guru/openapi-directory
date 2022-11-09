import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorObject } from "./errorobject";


export class ErrorResponseObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: ErrorObject;
}
