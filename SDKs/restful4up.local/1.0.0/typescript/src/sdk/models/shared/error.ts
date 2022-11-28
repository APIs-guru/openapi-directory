import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Error extends SpeakeasyBase {
  @SpeakeasyMetadata()
  message: string;

  @SpeakeasyMetadata()
  status: number;
}
