import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata()
  expired?: boolean;

  @SpeakeasyMetadata()
  expiryDate?: Date;

  @SpeakeasyMetadata()
  key?: string;
}
