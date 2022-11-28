import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PhotoObject
/** 
 * **object** detailing a single photo from a user
**/
export class PhotoObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=editorsPick" })
  editorsPick?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ownerAvatarURL" })
  ownerAvatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerCountry" })
  ownerCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerId" })
  ownerId?: number;

  @SpeakeasyMetadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @SpeakeasyMetadata({ data: "json, name=photoHiResURL" })
  photoHiResUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=photoId" })
  photoId?: number;

  @SpeakeasyMetadata({ data: "json, name=photoMediumResURL" })
  photoMediumResUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=photoURL" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=productCode" })
  productCode?: string;

  @SpeakeasyMetadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @SpeakeasyMetadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=timeUploaded" })
  timeUploaded?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
