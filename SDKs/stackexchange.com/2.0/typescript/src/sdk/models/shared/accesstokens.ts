import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessTokens extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessToken?: string;

  @SpeakeasyMetadata()
  accountId?: number;

  @SpeakeasyMetadata()
  expiresOnDate?: number;

  @SpeakeasyMetadata()
  scope?: any[];
}
