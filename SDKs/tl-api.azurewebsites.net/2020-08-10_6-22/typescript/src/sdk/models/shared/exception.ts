import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Exception extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InnerException" })
  innerException?: any;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=StackTrace" })
  stackTrace?: string;
}
