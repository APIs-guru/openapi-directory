import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorNotFoundErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class ErrorNotFound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: ErrorNotFoundErrors })
  errors?: ErrorNotFoundErrors[];
}
