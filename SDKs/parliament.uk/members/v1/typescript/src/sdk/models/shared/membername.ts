import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemberName extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=nameAddressAs" })
  nameAddressAs?: string;

  @SpeakeasyMetadata({ data: "json, name=nameDisplayAs" })
  nameDisplayAs?: string;

  @SpeakeasyMetadata({ data: "json, name=nameFullTitle" })
  nameFullTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=nameListAs" })
  nameListAs?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;
}
