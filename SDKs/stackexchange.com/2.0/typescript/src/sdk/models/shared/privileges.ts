import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Privileges extends SpeakeasyBase {
  @SpeakeasyMetadata()
  description?: string;

  @SpeakeasyMetadata()
  reputation?: number;

  @SpeakeasyMetadata()
  shortDescription?: string;
}
