import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata()
  errorId?: number;

  @SpeakeasyMetadata()
  errorMessage?: string;

  @SpeakeasyMetadata()
  errorName?: string;
}
