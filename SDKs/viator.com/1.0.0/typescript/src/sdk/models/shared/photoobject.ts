import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PhotoObject
/** 
 * **object** detailing a single photo from a user
**/
export class PhotoObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=editorsPick" })
  editorsPick?: boolean;

  @Metadata({ data: "json, name=ownerAvatarURL" })
  ownerAvatarUrl?: string;

  @Metadata({ data: "json, name=ownerCountry" })
  ownerCountry?: string;

  @Metadata({ data: "json, name=ownerId" })
  ownerId?: number;

  @Metadata({ data: "json, name=ownerName" })
  ownerName?: string;

  @Metadata({ data: "json, name=photoHiResURL" })
  photoHiResUrl?: string;

  @Metadata({ data: "json, name=photoId" })
  photoId?: number;

  @Metadata({ data: "json, name=photoMediumResURL" })
  photoMediumResUrl?: string;

  @Metadata({ data: "json, name=photoURL" })
  photoUrl?: string;

  @Metadata({ data: "json, name=productCode" })
  productCode?: string;

  @Metadata({ data: "json, name=productTitle" })
  productTitle?: string;

  @Metadata({ data: "json, name=productUrlName" })
  productUrlName?: string;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: number;

  @Metadata({ data: "json, name=sslSupported" })
  sslSupported?: boolean;

  @Metadata({ data: "json, name=thumbnailURL" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=timeUploaded" })
  timeUploaded?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
