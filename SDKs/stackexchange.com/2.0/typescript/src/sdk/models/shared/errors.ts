import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Errors extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  errorId?: number;

  @SpeakeasyMetadata()
  errorName?: string;
}
