import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatabaseFunctionNamesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=function_names" })
  functionNames?: string[];
}
