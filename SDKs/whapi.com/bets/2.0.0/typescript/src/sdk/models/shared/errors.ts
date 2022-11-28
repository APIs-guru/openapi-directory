import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



export class Errors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];
}
