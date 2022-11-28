import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class License extends SpeakeasyBase {
  @SpeakeasyMetadata()
  activatedAt?: number;

  @SpeakeasyMetadata()
  addressCity?: string;

  @SpeakeasyMetadata()
  addressCountry?: string;

  @SpeakeasyMetadata()
  addressPostal?: string;

  @SpeakeasyMetadata()
  addressRegion?: string;

  @SpeakeasyMetadata()
  addressStreet?: string;

  @SpeakeasyMetadata()
  createdAt?: number;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  licenseExpiration?: number;

  @SpeakeasyMetadata()
  licenseLiveAssetCount?: number;

  @SpeakeasyMetadata()
  licenseMaxAssets?: number;

  @SpeakeasyMetadata()
  licenseProjectAssetCount?: number;

  @SpeakeasyMetadata()
  licenseType?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  partner?: string;

  @SpeakeasyMetadata()
  phone?: string;

  @SpeakeasyMetadata()
  settings?: Map<string, any>;

  @SpeakeasyMetadata()
  ssoDefaultRole?: string;

  @SpeakeasyMetadata()
  ssoDomain?: string;

  @SpeakeasyMetadata()
  ssoLoginIssuerUrl?: string;

  @SpeakeasyMetadata()
  ssoLoginLoginUrl?: string;

  @SpeakeasyMetadata()
  ssoLoginLogoutUrl?: string;

  @SpeakeasyMetadata()
  ssoLoginMessage?: string;

  @SpeakeasyMetadata()
  ssoMode?: string;

  @SpeakeasyMetadata()
  ssoType?: string;

  @SpeakeasyMetadata()
  subscriptionCancelAt?: number;

  @SpeakeasyMetadata()
  subscriptionCanceledAt?: number;

  @SpeakeasyMetadata()
  subscriptionPeriodEnd?: number;

  @SpeakeasyMetadata()
  subscriptionPeriodStart?: number;

  @SpeakeasyMetadata()
  updatedAt?: number;

  @SpeakeasyMetadata()
  viaReseller?: boolean;
}
