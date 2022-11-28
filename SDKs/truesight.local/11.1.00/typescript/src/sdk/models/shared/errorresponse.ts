import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: string;

  @SpeakeasyMetadata()
  date?: Date;

  @SpeakeasyMetadata()
  message?: string;
}
