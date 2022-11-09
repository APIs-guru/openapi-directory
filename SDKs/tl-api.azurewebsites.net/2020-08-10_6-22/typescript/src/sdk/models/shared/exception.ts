import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Exception } from "./exception";


export class Exception extends SpeakeasyBase {
  @Metadata({ data: "json, name=InnerException" })
  innerException?: any;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Source" })
  source?: string;

  @Metadata({ data: "json, name=StackTrace" })
  stackTrace?: string;
}
