import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatabaseFunctionNamesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=function_names" })
  functionNames?: string[];
}
